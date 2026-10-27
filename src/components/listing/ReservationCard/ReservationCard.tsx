import React, { useState } from 'react';
import styles from './ReservationCard.module.css';
import { ChevronDownIcon } from '../../common/Icons';
import { ReservationPricing } from '../../../data/types';

export interface ReservationCardProps {
  pricing: ReservationPricing;
  onReserveClick?: () => void;
  onDateClick?: () => void;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({
  pricing,
  onReserveClick,
  onDateClick,
}) => {
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const totalGuests = adults + children;
  const nights = pricing.defaultNights || 5;
  const accommodationTotal = Math.round(pricing.nightlyRate * nights);
  const cleaningFee = pricing.cleaningFee;
  const serviceFee = pricing.serviceFee;
  const grandTotal = accommodationTotal + cleaningFee + serviceFee;

  return (
    <aside className={styles.reservationContainer} aria-label="Reservation widget">
      <div className={styles.card}>
        {/* Header: Price per night */}
        <div className={styles.cardHeader}>
          <span className={styles.priceAmount}>
            ₹{Math.round(pricing.nightlyRate * nights).toLocaleString('en-IN')}
          </span>
          <span className={styles.priceUnit}> for {nights} nights</span>
        </div>

        {/* Inputs Box */}
        <div className={styles.inputsBox}>
          {/* Check-in / Checkout Dual Box */}
          <div className={styles.dateRow}>
            <button
              type="button"
              className={styles.dateCell}
              onClick={onDateClick}
              aria-label="Change check-in date: 18 October 2026"
            >
              <span className={styles.inputLabel}>Check-in</span>
              <span className={styles.inputValue}>10/18/2026</span>
            </button>
            <button
              type="button"
              className={styles.dateCell}
              onClick={onDateClick}
              aria-label="Change checkout date: 23 October 2026"
            >
              <span className={styles.inputLabel}>Checkout</span>
              <span className={styles.inputValue}>10/23/2026</span>
            </button>
          </div>

          {/* Guests Selector */}
          <button
            type="button"
            className={styles.guestBox}
            onClick={() => setIsGuestsOpen(!isGuestsOpen)}
            aria-expanded={isGuestsOpen}
            aria-label={`Guests: ${totalGuests} guest${totalGuests > 1 ? 's' : ''}${infants > 0 ? `, ${infants} infant` : ''}${pets > 0 ? `, ${pets} pet` : ''}`}
          >
            <div className={styles.guestText}>
              <span className={styles.inputLabel}>Guests</span>
              <span className={styles.inputValue}>
                {totalGuests} guest{totalGuests > 1 ? 's' : ''}
                {infants > 0 ? `, ${infants} infant` : ''}
              </span>
            </div>
            <span
              className={`${styles.chevronIcon} ${isGuestsOpen ? styles.rotated : ''}`}
              aria-hidden="true"
            >
              <ChevronDownIcon size={16} />
            </span>
          </button>

          {/* Guests Popover Dropdown */}
          {isGuestsOpen && (
            <div className={styles.guestsDropdown} role="dialog" aria-label="Guests selector">
              {/* Adults */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestTypeTitle}>Adults</div>
                  <div className={styles.guestTypeSubtitle}>Age 13+</div>
                </div>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={adults <= 1}
                    onClick={() => setAdults(adults - 1)}
                    aria-label="Decrease adults"
                  >
                    -
                  </button>
                  <span className={styles.stepperCount}>{adults}</span>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={totalGuests >= 3}
                    onClick={() => setAdults(adults + 1)}
                    aria-label="Increase adults"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestTypeTitle}>Children</div>
                  <div className={styles.guestTypeSubtitle}>Ages 2–12</div>
                </div>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={children <= 0}
                    onClick={() => setChildren(children - 1)}
                    aria-label="Decrease children"
                  >
                    -
                  </button>
                  <span className={styles.stepperCount}>{children}</span>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={totalGuests >= 3}
                    onClick={() => setChildren(children + 1)}
                    aria-label="Increase children"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestTypeTitle}>Infants</div>
                  <div className={styles.guestTypeSubtitle}>Under 2</div>
                </div>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={infants <= 0}
                    onClick={() => setInfants(infants - 1)}
                    aria-label="Decrease infants"
                  >
                    -
                  </button>
                  <span className={styles.stepperCount}>{infants}</span>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={infants >= 2}
                    onClick={() => setInfants(infants + 1)}
                    aria-label="Increase infants"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pets */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestTypeTitle}>Pets</div>
                  <div className={styles.guestTypeSubtitle}>Bringing a service animal?</div>
                </div>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={pets <= 0}
                    onClick={() => setPets(pets - 1)}
                    aria-label="Decrease pets"
                  >
                    -
                  </button>
                  <span className={styles.stepperCount}>{pets}</span>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    disabled={pets >= 2}
                    onClick={() => setPets(pets + 1)}
                    aria-label="Increase pets"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className={styles.closeDropdownButton}
                onClick={() => setIsGuestsOpen(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Free Cancellation Notice */}
        <div className={styles.cancellationNotice}>
          Free cancellation before <span className={styles.cancellationBold}>17 October</span>
        </div>

        {/* Reserve Button */}
        <button
          type="button"
          className={styles.reserveButton}
          onClick={onReserveClick}
        >
          Reserve
        </button>

        <p className={styles.wontBeChargedNote}>You won’t be charged yet</p>

        {/* Price Breakdown */}
        <div className={styles.breakdownSection}>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>
              ₹{Math.round(pricing.nightlyRate).toLocaleString('en-IN')} x {nights} nights
            </span>
            <span>₹{accommodationTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
          </div>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>Airbnb service fee</span>
            <span>₹{serviceFee.toLocaleString('en-IN')}</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total before taxes</span>
            <span>₹{grandTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Report this listing */}
      <button type="button" className={styles.reportLink}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M2 1a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V9h4.5l1.5 2H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.5L8 0H2zm1 2h5.5l1.5 2H13v4H8.5L7 7H3V3z" />
        </svg>
        <span>Report this listing</span>
      </button>
    </aside>
  );
};

export default ReservationCard;
