import React, { useState } from 'react';
import {
  LaurelWreathIcon,
  CleanlinessIcon,
  AccuracyIcon,
  CheckInIcon,
  CommunicationIcon,
  LocationIcon,
  ValueIcon,
  StarIcon,
} from '@/components/common/Icons';
import { ReviewItem, RatingCategoryScores } from '@/data/types';
import styles from './ReviewsSection.module.css';

interface ReviewsSectionProps {
  overallRating: number;
  totalReviews: number;
  ratings: RatingCategoryScores;
  reviews: ReviewItem[];
}

interface FilterPill {
  id: string;
  icon: string;
  label: string;
  count: number;
}

const FILTER_PILLS: FilterPill[] = [
  { id: 'comfort', icon: '🛋️', label: 'Comfort', count: 6 },
  { id: 'accuracy', icon: '✓', label: 'Accuracy', count: 5 },
  { id: 'hottub', icon: '🛁', label: 'Hot tub', count: 5 },
  { id: 'condition', icon: '🍰', label: 'Condition', count: 4 },
  { id: 'hospitality', icon: '🎁', label: 'Hospitality', count: 8 },
  { id: 'cleanliness', icon: '🧼', label: 'Cleanliness', count: 4 },
  { id: 'amenities', icon: '🎂', label: 'Amenities', count: 2 },
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  overallRating,
  totalReviews,
  ratings,
  reviews,
}) => {
  const [activePill, setActivePill] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 6);

  return (
    <section className={styles.reviewsSection} aria-labelledby="reviews-section-heading">
      {/* Centered Crest Lockup */}
      <div className={styles.crestLockup}>
        <div className={styles.crestRatingRow}>
          <LaurelWreathIcon size={64} side="left" className={styles.wreathLeft} />
          <span className={styles.hugeRatingScore}>{overallRating.toFixed(2)}</span>
          <LaurelWreathIcon size={64} side="right" className={styles.wreathRight} />
        </div>

        <h2 id="reviews-section-heading" className={styles.guestFavouriteTitle}>
          Guest favourite
        </h2>
        <p className={styles.guestFavouriteSubtitle}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className={styles.howReviewsWorkLink}>
          How reviews work
        </button>
      </div>

      {/* 7-Column Rating Categories Grid */}
      <div className={styles.ratingsGrid}>
        {/* Overall Rating Distribution */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Overall rating</span>
          <div className={styles.distributionBars}>
            <div className={styles.distributionRow}>
              <span className={styles.starNumber}>5</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '95%' }} />
              </div>
            </div>
            <div className={styles.distributionRow}>
              <span className={styles.starNumber}>4</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '5%' }} />
              </div>
            </div>
            <div className={styles.distributionRow}>
              <span className={styles.starNumber}>3</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '0%' }} />
              </div>
            </div>
            <div className={styles.distributionRow}>
              <span className={styles.starNumber}>2</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '0%' }} />
              </div>
            </div>
            <div className={styles.distributionRow}>
              <span className={styles.starNumber}>1</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Cleanliness */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Cleanliness</span>
          <span className={styles.categoryScore}>{ratings.cleanliness.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <CleanlinessIcon size={32} />
          </div>
        </div>

        {/* Accuracy */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Accuracy</span>
          <span className={styles.categoryScore}>{ratings.accuracy.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <AccuracyIcon size={32} />
          </div>
        </div>

        {/* Check-in */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Check-in</span>
          <span className={styles.categoryScore}>{ratings.checkIn.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <CheckInIcon size={32} />
          </div>
        </div>

        {/* Communication */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Communication</span>
          <span className={styles.categoryScore}>{ratings.communication.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <CommunicationIcon size={32} />
          </div>
        </div>

        {/* Location */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Location</span>
          <span className={styles.categoryScore}>{ratings.location.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <LocationIcon size={32} />
          </div>
        </div>

        {/* Value */}
        <div className={styles.categoryColumn}>
          <span className={styles.categoryTitle}>Value</span>
          <span className={styles.categoryScore}>{ratings.value.toFixed(1)}</span>
          <div className={styles.categoryIcon}>
            <ValueIcon size={32} />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className={styles.filterPillsRow}>
        {FILTER_PILLS.map((pill) => {
          const isActive = activePill === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              className={`${styles.filterPill} ${isActive ? styles.active : ''}`}
              onClick={() => setActivePill(isActive ? null : pill.id)}
            >
              <span className={styles.pillIcon}>{pill.icon}</span>
              <span>{pill.label}</span>
              <span className={styles.pillCount}>{pill.count}</span>
            </button>
          );
        })}
      </div>

      {/* Reviews 2-Column Grid */}
      <div className={styles.reviewsGrid}>
        {visibleReviews.map((review) => {
          const isExpanded = !!expandedReviews[review.id];
          const isLongText = review.comment.length > 180;
          const displayText =
            isLongText && !isExpanded
              ? `${review.comment.slice(0, 180).trim()}...`
              : review.comment;

          return (
            <article key={review.id} className={styles.reviewCard}>
              <div className={styles.authorRow}>
                <div className={styles.avatarCircle}>
                  {review.authorAvatarUrl ? (
                    <img
                      src={review.authorAvatarUrl}
                      alt={review.authorName}
                      className={styles.avatarImage}
                      loading="lazy"
                    />
                  ) : (
                    <span>{review.authorName.charAt(0)}</span>
                  )}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{review.authorName}</span>
                  <span className={styles.authorTenure}>{review.authorDuration}</span>
                </div>
              </div>

              <div className={styles.ratingRow}>
                <div className={styles.starsGroup}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={`star-${review.id}-${i}`} size={10} color="#222222" />
                  ))}
                </div>
                <span className={styles.bulletSeparator}>·</span>
                <span className={styles.reviewDate}>{review.date}</span>
              </div>

              <p className={styles.reviewText}>{displayText}</p>

              {isLongText && (
                <button
                  type="button"
                  className={styles.showMoreBtn}
                  onClick={() => toggleExpand(review.id)}
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {/* Show all reviews button */}
      <div className={styles.showAllReviewsContainer}>
        <button
          type="button"
          className={styles.showAllButton}
          onClick={() => setShowAllReviews((prev) => !prev)}
        >
          {showAllReviews ? 'Show fewer reviews' : `Show all ${totalReviews} reviews`}
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
