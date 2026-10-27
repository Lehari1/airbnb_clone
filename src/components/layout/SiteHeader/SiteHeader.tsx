import React from 'react';
import styles from './SiteHeader.module.css';
import { AirbnbLogoIcon, GlobeIcon, MenuBarsIcon, SearchIcon } from '../../common/Icons';

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
          {/* Stylized House Icon */}
          <span className={styles.searchHouseIcon} aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="2" width="28" height="28" rx="8" fill="#F2F2F2" />
              <path d="M9.5 15.5L16 10.5l6.5 5V23a1 1 0 0 1-1 1h-3.5v-4.5h-4V24h-3.5a1 1 0 0 1-1-1v-7.5z" fill="#484848" />
              <line x1="20" y1="11" x2="20" y2="13.5" stroke="#484848" strokeWidth="2" strokeLinecap="round" />
            </svg>
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
            className={styles.userMenuPill}
            onClick={onUserMenuClick}
            aria-label="User navigation menu"
            aria-haspopup="menu"
          >
            <MenuBarsIcon size={16} />
            <div className={styles.userMenuAvatar} aria-hidden="true">
              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 18c-6.075 0-11 3.582-11 8v2h22v-2c0-4.418-4.925-8-11-8z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
