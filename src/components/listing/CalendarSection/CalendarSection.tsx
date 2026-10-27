import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, KeyboardIcon } from '@/components/common/Icons';
import styles from './CalendarSection.module.css';

interface CalendarDate {
  year: number;
  month: number; // 0-indexed (9 = Oct, 10 = Nov)
  day: number;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Blocked or unavailable dates (Nov 18-24, Nov 29-30)
const isDateBlocked = (year: number, month: number, day: number): boolean => {
  if (year === 2026 && month === 10) {
    if (day >= 18 && day <= 24) return true;
    if (day >= 29 && day <= 30) return true;
  }
  return false;
};

const dateToTimestamp = (date: CalendarDate): number => {
  return new Date(date.year, date.month, date.day).getTime();
};

const formatDateRange = (start: CalendarDate | null, end: CalendarDate | null): string => {
  if (!start) return 'Add your travel dates for exact pricing';
  const startStr = `${start.day} ${MONTH_NAMES[start.month].slice(0, 3)} ${start.year}`;
  if (!end) return `${startStr} – Select checkout`;
  const endStr = `${end.day} ${MONTH_NAMES[end.month].slice(0, 3)} ${end.year}`;
  return `${startStr} – ${endStr}`;
};

export const CalendarSection: React.FC = () => {
  // Default selected dates matching reference: Oct 18, 2026 – Oct 23, 2026
  const [startDate, setStartDate] = useState<CalendarDate | null>({
    year: 2026,
    month: 9, // October
    day: 18,
  });
  const [endDate, setEndDate] = useState<CalendarDate | null>({
    year: 2026,
    month: 9, // October
    day: 23,
  });

  // Base month for dual view (default October 2026)
  const [baseMonth, setBaseMonth] = useState<CalendarDate>({
    year: 2026,
    month: 9, // October
    day: 1,
  });

  // Calculate nights
  const nightsCount =
    startDate && endDate
      ? Math.round((dateToTimestamp(endDate) - dateToTimestamp(startDate)) / (1000 * 60 * 60 * 24))
      : 0;

  const handleDateClick = (year: number, month: number, day: number) => {
    if (isDateBlocked(year, month, day)) return;

    const clickedDate: CalendarDate = { year, month, day };
    const clickedTime = dateToTimestamp(clickedDate);

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else {
      const startTime = dateToTimestamp(startDate);
      if (clickedTime > startTime) {
        setEndDate(clickedDate);
      } else {
        setStartDate(clickedDate);
        setEndDate(null);
      }
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handlePrevMonth = () => {
    setBaseMonth((prev) => {
      const newMonth = prev.month === 0 ? 11 : prev.month - 1;
      const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
      return { year: newYear, month: newMonth, day: 1 };
    });
  };

  const handleNextMonth = () => {
    setBaseMonth((prev) => {
      const newMonth = prev.month === 11 ? 0 : prev.month + 1;
      const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
      return { year: newYear, month: newMonth, day: 1 };
    });
  };

  // Month 2 is next month
  const secondMonth: CalendarDate = {
    year: baseMonth.month === 11 ? baseMonth.year + 1 : baseMonth.year,
    month: baseMonth.month === 11 ? 0 : baseMonth.month + 1,
    day: 1,
  };

  const renderMonth = (monthInfo: CalendarDate, showPrev: boolean, showNext: boolean) => {
    const { year, month } = monthInfo;
    const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const emptyLeadingDays = Array.from({ length: firstDayOfWeek });
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const startTime = startDate ? dateToTimestamp(startDate) : null;
    const endTime = endDate ? dateToTimestamp(endDate) : null;

    return (
      <div className={styles.monthBlock}>
        <div className={styles.monthHeader}>
          {showPrev ? (
            <button
              type="button"
              className={styles.navButton}
              onClick={handlePrevMonth}
              aria-label="Previous month"
            >
              <ChevronLeftIcon size={16} />
            </button>
          ) : (
            <div className={styles.navPlaceholder} />
          )}

          <div className={styles.monthTitle}>
            {MONTH_NAMES[month]} {year}
          </div>

          {showNext ? (
            <button
              type="button"
              className={styles.navButton}
              onClick={handleNextMonth}
              aria-label="Next month"
            >
              <ChevronRightIcon size={16} />
            </button>
          ) : (
            <div className={styles.navPlaceholder} />
          )}
        </div>

        <div className={styles.weekdaysRow}>
          {WEEKDAYS.map((wd, idx) => (
            <div key={`${wd}-${idx}`} className={styles.weekday}>
              {wd}
            </div>
          ))}
        </div>

        <div className={styles.daysGrid}>
          {emptyLeadingDays.map((_, idx) => (
            <div key={`empty-${idx}`} className={styles.emptyCell} />
          ))}

          {monthDays.map((day) => {
            const currentDateTime = new Date(year, month, day).getTime();
            const blocked = isDateBlocked(year, month, day);

            const isStart =
              startDate &&
              startDate.year === year &&
              startDate.month === month &&
              startDate.day === day;

            const isEnd =
              endDate &&
              endDate.year === year &&
              endDate.month === month &&
              endDate.day === day;

            const isInRange =
              startTime && endTime && currentDateTime > startTime && currentDateTime < endTime;

            const cellClasses = [
              styles.dayCell,
              blocked ? styles.disabled : '',
              isStart ? styles.selectedStart : '',
              isEnd ? styles.selectedEnd : '',
              isInRange ? styles.inRange : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={`day-${year}-${month}-${day}`}
                type="button"
                className={cellClasses}
                onClick={() => handleDateClick(year, month, day)}
                disabled={blocked}
                aria-label={`${day} ${MONTH_NAMES[month]} ${year}`}
              >
                <span className={styles.dayCircle}>{day}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.calendarSection} aria-labelledby="calendar-heading">
      <h2 id="calendar-heading" className={styles.heading}>
        {nightsCount > 0 ? `${nightsCount} nights in Candolim` : 'Select check-in date'}
      </h2>
      <p className={styles.subtitle}>{formatDateRange(startDate, endDate)}</p>

      <div className={styles.calendarContainer}>
        {renderMonth(baseMonth, true, false)}
        {renderMonth(secondMonth, false, true)}
      </div>

      <div className={styles.bottomBar}>
        <button type="button" className={styles.keyboardBtn} aria-label="Keyboard shortcuts">
          <KeyboardIcon size={20} />
        </button>

        <button type="button" className={styles.clearDatesBtn} onClick={handleClearDates}>
          Clear dates
        </button>
      </div>
    </section>
  );
};

export default CalendarSection;
