import React from 'react';
import styles from './SiteHeader.module.css';
import {
  AirbnbLogoIcon,
  GlobeIcon,
  MenuBarsIcon,
  SearchHouseIcon,
  SearchIcon,
} from '../../common/Icons';

export interface SiteHeaderProps {
  onSearchClick?: () => void;
  onHostClick?: () => void;
  onUserMenuClick?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  onSearchClick,
  onHostClick,
  onUserMenuClick,
}) => {
  return (
    <header className={styles.siteHeader} role="banner">
      <div className={styles.headerContainer}>
        {/* Left: Branded Airbnb Logo */}
        <a href="/" className={styles.logoLink} aria-label="Airbnb Home">
          <AirbnbLogoIcon size={32} />
          <span className={styles.logoText}>airbnb</span>
        </a>

        {/* Center: Search Pill */}
        <div
          className={styles.searchPill}
          role="button"
          tabIndex={0}
          onClick={onSearchClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSearchClick?.();
            }
          }}
          aria-label="Search destinations, dates, and guests"
        >
          {/* Architectural House with Tree and Red Door */}
          <span className={styles.searchHouseIcon} aria-hidden="true">
            <SearchHouseIcon size={26} />
          </span>

          <span className={styles.searchItemBold}>Anywhere</span>
          <span className={styles.searchDivider} aria-hidden="true" />
          <span className={styles.searchItemBold}>Anytime</span>
          <span className={styles.searchDivider} aria-hidden="true" />
          <span className={styles.searchItemMuted}>Add guests</span>

          <button
            type="button"
            className={styles.searchButton}
            aria-label="Search"
            onClick={(e) => {
              e.stopPropagation();
              onSearchClick?.();
            }}
          >
            <SearchIcon size={12} color="#FFFFFF" />
          </button>
        </div>

        {/* Right: Host, Globe, User Menu */}
        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.hostButton}
            onClick={onHostClick}
          >
            Become a host
          </button>

          <button
            type="button"
            className={styles.globeButton}
            aria-label="Choose language and currency"
          >
            <GlobeIcon size={16} />
          </button>

          <button
            type="button"
            className={styles.userMenuButton}
            onClick={onUserMenuClick}
            aria-label="User navigation menu"
            aria-haspopup="menu"
          >
            <MenuBarsIcon size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
