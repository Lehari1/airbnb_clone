import React from 'react';
import styles from './PromoBanner.module.css';
import { ValueIcon } from '../../common/Icons';

export interface PromoBannerProps {
  onClaim?: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaim }) => {
  return (
    <div className={styles.promoCard} role="region" aria-label="Promotional offer">
      <div className={styles.promoTagIcon} aria-hidden="true">
        <ValueIcon size={24} color="#108a00" />
      </div>
      <div className={styles.promoContent}>
        <span className={styles.promoTitle}>Get 10% off your next stay.</span>
        <button
          type="button"
          className={styles.termsLink}
          onClick={onClaim}
          aria-label="View promotional terms and conditions"
        >
          Terms apply
        </button>
      </div>
      <button
        type="button"
        className={styles.claimButton}
        onClick={onClaim}
      >
        Claim
      </button>
    </div>
  );
};

export default PromoBanner;
