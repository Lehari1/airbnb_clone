import React from 'react';
import clsx from 'clsx';
import styles from './Rating.module.css';

export interface RatingProps {
  score: number;
  reviewsCount?: number;
  showStar?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onReviewsClick?: () => void;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  score,
  reviewsCount,
  showStar = true,
  size = 'md',
  onReviewsClick,
  className,
}) => {
  return (
    <div
      className={clsx(styles.ratingWrapper, styles[size], className)}
      aria-label={`Rating: ${score.toFixed(2)} out of 5 stars${reviewsCount ? `, ${reviewsCount} reviews` : ''}`}
    >
      {showStar && (
        <span className={styles.star} aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M15.094 1.579l-4.124 8.88-9.78 1.187a1.002 1.002 0 0 0-.563 1.734l7.228 6.647-1.921 9.664a1 1 0 0 0 1.474 1.071L16 26.046l8.592 4.716a1 1 0 0 0 1.474-1.071l-1.921-9.664 7.228-6.647a1.002 1.002 0 0 0-.563-1.734l-9.78-1.187-4.124-8.88a1 1 0 0 0-1.812 0z" />
          </svg>
        </span>
      )}
      <span className={styles.score}>{score.toFixed(2)}</span>

      {reviewsCount !== undefined && (
        <>
          <span className={styles.dotSeparator} aria-hidden="true">
            ·
          </span>
          <button
            type="button"
            className={styles.reviewsCount}
            onClick={onReviewsClick}
            aria-label={`View ${reviewsCount} reviews`}
          >
            {reviewsCount} reviews
          </button>
        </>
      )}
    </div>
  );
};

export default Rating;
