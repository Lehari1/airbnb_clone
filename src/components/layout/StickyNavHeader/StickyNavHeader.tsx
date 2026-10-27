import React, { useEffect, useState } from 'react';
import { StarIcon } from '@/components/common/Icons';
import styles from './StickyNavHeader.module.css';

interface StickyNavHeaderProps {
  priceText: string;
  rating: number;
  reviewsCount: number;
  onReserveClick?: () => void;
}

type TabKey = 'photos' | 'amenities' | 'reviews' | 'location';

export const StickyNavHeader: React.FC<StickyNavHeaderProps> = ({
  priceText,
  rating,
  reviewsCount,
  onReserveClick,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>('photos');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 560);

      // Section thresholds
      if (scrollY < 1200) {
        setActiveTab('photos');
      } else if (scrollY < 2100) {
        setActiveTab('amenities');
      } else if (scrollY < 3300) {
        setActiveTab('reviews');
      } else {
        setActiveTab('location');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (tab: TabKey) => {
    setActiveTab(tab);
    switch (tab) {
      case 'photos':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'amenities': {
        const el = document.getElementById('amenities-heading');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        break;
      }
      case 'reviews': {
        const el = document.getElementById('reviews-section-heading');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        break;
      }
      case 'location': {
        const el = document.getElementById('location-heading');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        break;
      }
    }
  };

  return (
    <header
      className={`${styles.stickyNavHeader} ${isVisible ? styles.visible : ''}`}
      aria-label="Listing navigation header"
      aria-hidden={!isVisible}
    >
      <div className={styles.navContainer}>
        {/* Navigation Tabs */}
        <nav className={styles.tabsList} aria-label="Listing sections">
          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'photos' ? styles.active : ''}`}
            onClick={() => scrollToSection('photos')}
          >
            Photos
            {activeTab === 'photos' && <span className={styles.activeIndicator} />}
          </button>

          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'amenities' ? styles.active : ''}`}
            onClick={() => scrollToSection('amenities')}
          >
            Amenities
            {activeTab === 'amenities' && <span className={styles.activeIndicator} />}
          </button>

          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'reviews' ? styles.active : ''}`}
            onClick={() => scrollToSection('reviews')}
          >
            Reviews
            {activeTab === 'reviews' && <span className={styles.activeIndicator} />}
          </button>

          <button
            type="button"
            className={`${styles.tabButton} ${activeTab === 'location' ? styles.active : ''}`}
            onClick={() => scrollToSection('location')}
          >
            Location
            {activeTab === 'location' && <span className={styles.activeIndicator} />}
          </button>
        </nav>

        {/* Right Lockup: Price, Rating & Mini Reserve Button */}
        <div className={styles.reserveLockup}>
          <div className={styles.priceRatingInfo}>
            <span className={styles.priceText}>{priceText}</span>
            <span className={styles.ratingText}>
              <span className={styles.starIcon}>
                <StarIcon size={10} color="#222222" />
              </span>
              <span>
                {rating} · {reviewsCount} reviews
              </span>
            </span>
          </div>

          <button
            type="button"
            className={styles.miniReserveBtn}
            onClick={onReserveClick}
          >
            Reserve
          </button>
        </div>
      </div>
    </header>
  );
};

export default StickyNavHeader;
