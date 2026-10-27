import React from 'react';
import styles from './ListingOverview.module.css';
import { LaurelWreathIcon, StarIcon } from '../../common/Icons';

export interface ListingOverviewProps {
  propertyType: string;
  guestCapacity: number;
  bedroomsCount: number;
  bedsCount: number;
  bathroomsCount: number;
  overallRating: number;
  totalReviews: number;
  isGuestFavourite?: boolean;
  onReviewsClick?: () => void;
}

export const ListingOverview: React.FC<ListingOverviewProps> = ({
  propertyType,
  guestCapacity,
  bedroomsCount,
  bedsCount,
  bathroomsCount,
  overallRating,
  totalReviews,
  isGuestFavourite = true,
  onReviewsClick,
}) => {
  return (
    <section className={styles.overviewSection} aria-label="Listing overview and capacity">
      {/* Property Type and Capacity line */}
      <div className={styles.summaryTextContainer}>
        <h2 className={styles.propertyTypeTitle}>{propertyType}</h2>
        <p className={styles.capacityLine}>
          {guestCapacity} guests · {bedroomsCount} bedroom · {bedsCount} bed · {bathroomsCount} bathroom
        </p>
      </div>

      {/* Guest Favourite Card */}
      {isGuestFavourite && (
        <div
          className={styles.favouriteCard}
          role="region"
          aria-label="Guest favourite rating highlights"
        >
          <div className={styles.favouriteLeft}>
            <div className={styles.laurelGroup}>
              <LaurelWreathIcon size={22} side="left" />
              <div className={styles.favouriteBadgeTitle}>
                <span>Guest</span>
                <span>favourite</span>
              </div>
              <LaurelWreathIcon size={22} side="right" />
            </div>

            <div className={styles.favouriteQuote}>
              One of the most loved homes on Airbnb,<br />according to guests
            </div>
          </div>

          <div className={styles.favouriteRight}>
            <div className={styles.favouriteRatingItem}>
              <div className={styles.favouriteRatingScore}>{overallRating.toFixed(2)}</div>
              <div className={styles.favouriteStars} aria-label={`${overallRating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={10} color="#222222" />
                ))}
              </div>
            </div>

            <div className={styles.favouriteDivider} aria-hidden="true" />

            <div className={styles.favouriteReviewsItem}>
              <div className={styles.favouriteReviewsCount}>{totalReviews}</div>
              <button
                type="button"
                className={styles.favouriteReviewsLabel}
                onClick={onReviewsClick}
                aria-label={`View ${totalReviews} guest reviews`}
              >
                Reviews
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ListingOverview;
