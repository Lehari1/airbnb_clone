import React, { useState } from 'react';
import styles from './DescriptionSection.module.css';
import { ChevronRightIcon } from '../../common/Icons';

export interface DescriptionSectionProps {
  paragraphs: string[];
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ paragraphs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.descriptionContainer} aria-label="About this space">
      <div className={styles.translationBanner} role="note" aria-label="Translation notice">
        <span>Some info has been automatically translated. </span>
        <button type="button" className={styles.showOriginalBtn}>
          Show original
        </button>
      </div>

      <div className={`${styles.descriptionParagraphs} ${!isExpanded ? styles.clamped : ''}`}>
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      <button
        type="button"
        className={styles.showMoreButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Show less description' : 'Show full property description'}
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <span
          className={styles.chevronIcon}
          style={{ transform: isExpanded ? 'rotate(-90deg)' : undefined, transition: 'transform 200ms ease' }}
          aria-hidden="true"
        >
          <ChevronRightIcon size={14} />
        </span>
      </button>
    </section>
  );
};

export default DescriptionSection;
