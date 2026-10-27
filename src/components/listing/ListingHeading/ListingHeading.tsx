import React, { useState } from 'react';
import styles from './ListingHeading.module.css';
import { ShareIcon, HeartIcon } from '../../common/Icons';

export interface ListingHeadingProps {
  title: string;
  onShare?: () => void;
  onSaveToggle?: (isSaved: boolean) => void;
}

export const ListingHeading: React.FC<ListingHeadingProps> = ({
  title,
  onShare,
  onSaveToggle,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShareClick = (): void => {
    if (onShare) {
      onShare();
      return;
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  const handleSaveClick = (): void => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    onSaveToggle?.(nextSaved);
  };

  return (
    <section className={styles.headingContainer} aria-label="Listing title and actions">
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actionButtons}>
        {/* Share Action */}
        <button
          type="button"
          className={styles.actionButton}
          onClick={handleShareClick}
          aria-label="Share this listing"
        >
          <ShareIcon size={16} />
          <span className={styles.actionText}>Share</span>
        </button>

        {/* Save Action */}
        <button
          type="button"
          className={styles.actionButton}
          onClick={handleSaveClick}
          aria-label={isSaved ? 'Remove listing from wishlist' : 'Save listing to wishlist'}
        >
          <span className={isSaved ? styles.heartFilled : undefined}>
            <HeartIcon size={16} filled={isSaved} />
          </span>
          <span className={styles.actionText}>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {showToast && (
        <div className={styles.copiedToast} role="status">
          Link copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default ListingHeading;
