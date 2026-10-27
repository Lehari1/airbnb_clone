import React from 'react';
import styles from './ListingOverview.module.css';
import { LaurelWreathIcon, StarIcon, ValueIcon } from '../../common/Icons';

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
  onClaimDiscount?: () => void;
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
  onClaimDiscount,
}) => {
  return (
    <section className={styles.overviewSection} aria-label="Listing overview and capacity">
      <div className={styles.summaryRow}>
        {/* Left: Property Type and Capacity line */}
        <div className={styles.summaryTextContainer}>
          <h2 className={styles.propertyTypeTitle}>{propertyType}</h2>
          <p className={styles.capacityLine}>
            {guestCapacity} guests · {bedroomsCount} bedroom · {bedsCount} bed · {bathroomsCount} bathroom
          </p>
        </div>

        {/* Right: Promotional 10% Discount Card */}
        <div className={styles.promoCard} role="region" aria-label="Promotional offer">
          <div className={styles.promoTagIcon} aria-hidden="true">
            <ValueIcon size={24} color="#108a00" />
          </div>
          <div className={styles.promoContent}>
            <span className={styles.promoTitle}>Get 10% off your next stay.</span>
            <button
              type="button"
              className={styles.termsLink}
              onClick={onClaimDiscount}
              aria-label="View promotional terms and conditions"
            >
              Terms apply
            </button>
          </div>
          <button
            type="button"
            className={styles.claimButton}
            onClick={onClaimDiscount}
          >
            Claim
          </button>
        </div>
      </div>

      {/* Guest Favourite Card */}
      {isGuestFavourite && (
        <div
          className={styles.favouriteCard}
          role="region"
          aria-label="Guest favourite rating highlights"
        >
          <div className={styles.favouriteLeft}>
            <div className={styles.laurelLockup}>
              <LaurelWreathIcon size={26} side="left" />
              <div className={styles.favouriteTextGroup}>
                <div className={styles.favouriteBadgeTitle}>Guest favourite</div>
                <div className={styles.favouriteSubtitle}>
                  One of the most loved homes on Airbnb, based on ratings, reviews, and reliability
                </div>
              </div>
              <LaurelWreathIcon size={26} side="right" />
            </div>
          </div>

          <div className={styles.favouriteRight}>
            <div className={styles.favouriteRatingItem}>
              <div className={styles.favouriteRatingScore}>{overallRating.toFixed(2)}</div>
              <div className={styles.favouriteStars} aria-label={`${overallRating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} size={11} color="#222222" />
                ))}
              </div>
            </div>

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
