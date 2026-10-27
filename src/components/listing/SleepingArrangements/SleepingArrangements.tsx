import React from 'react';
import styles from './SleepingArrangements.module.css';
import { SleepingArrangement } from '../../../data/types';

export interface SleepingArrangementsProps {
  arrangements: SleepingArrangement[];
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ arrangements }) => {
  return (
    <section className={styles.sleepingSection} aria-label="Sleeping arrangements">
      <h3 className={styles.sectionTitle}>Where you'll sleep</h3>

      <div className={styles.cardsRow}>
        {arrangements.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              {item.iconType === 'double-bed' ? (
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v9" />
                  <path d="M2 18h28v6H2z" />
                  <line x1="4" y1="24" x2="4" y2="28" />
                  <line x1="28" y1="24" x2="28" y2="28" />
                  <line x1="8" y1="12" x2="13" y2="12" />
                  <line x1="19" y1="12" x2="24" y2="12" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 14V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
                  <path d="M3 14h26v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" />
                  <line x1="6" y1="24" x2="6" y2="28" />
                  <line x1="26" y1="24" x2="26" y2="28" />
                </svg>
              )}
            </div>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SleepingArrangements;
