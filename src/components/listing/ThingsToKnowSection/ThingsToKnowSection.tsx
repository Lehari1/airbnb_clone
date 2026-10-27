import React from 'react';
import styles from './ThingsToKnowSection.module.css';

export const ThingsToKnowSection: React.FC = () => {
  return (
    <section className={styles.thingsToKnowSection} aria-labelledby="things-to-know-heading">
      <h2 id="things-to-know-heading" className={styles.heading}>
        Things to know
      </h2>

      <div className={styles.columnsGrid}>
        {/* Column 1: Cancellation policy */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="10" y1="14" x2="14" y2="18" />
              <line x1="14" y1="14" x2="10" y2="18" />
            </svg>
          </div>

          <h3 className={styles.columnTitle}>Cancellation policy</h3>
          <div className={styles.columnContent}>
            <p className={styles.contentItem}>
              Free cancellation before 17 October. Cancel before check-in on 18 October for a
              partial refund.
            </p>
            <p className={styles.contentItem}>Review this host’s full policy for details.</p>
          </div>

          <button type="button" className={styles.learnMoreLink}>
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="8" r="5" />
              <path d="M12 12l8 8" />
              <path d="M17 15l2 2" />
              <path d="M19 19l2 2" />
            </svg>
          </div>

          <h3 className={styles.columnTitle}>House rules</h3>
          <div className={styles.columnContent}>
            <p className={styles.contentItem}>Check-in after 2:00 pm</p>
            <p className={styles.contentItem}>Checkout before 11:00 am</p>
            <p className={styles.contentItem}>3 guests maximum</p>
          </div>

          <button type="button" className={styles.learnMoreLink}>
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <h3 className={styles.columnTitle}>Safety &amp; property</h3>
          <div className={styles.columnContent}>
            <p className={styles.contentItem}>Carbon monoxide alarm not reported</p>
            <p className={styles.contentItem}>Smoke alarm not reported</p>
            <p className={styles.contentItem}>Exterior security cameras on property</p>
          </div>

          <button type="button" className={styles.learnMoreLink}>
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
