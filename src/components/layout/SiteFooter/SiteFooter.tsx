import React from 'react';
import { GlobeIcon } from '@/components/common/Icons';
import styles from './SiteFooter.module.css';

export const SiteFooter: React.FC = () => {
  return (
    <footer className={styles.footer} aria-label="Airbnb Footer">
      <div className={styles.footerContainer}>
        <div className={styles.columnsGrid}>
          {/* Column 1: Support */}
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Support</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#help">Help Centre</a></li>
              <li className={styles.linkItem}><a href="#aircover">AirCover</a></li>
              <li className={styles.linkItem}><a href="#anti-discrimination">Anti-discrimination</a></li>
              <li className={styles.linkItem}><a href="#disability-support">Disability support</a></li>
              <li className={styles.linkItem}><a href="#cancellation-options">Cancellation options</a></li>
              <li className={styles.linkItem}><a href="#report-neighbourhood-concern">Report neighbourhood concern</a></li>
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Hosting</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#airbnb-your-home">Airbnb your home</a></li>
              <li className={styles.linkItem}><a href="#aircover-hosts">AirCover for Hosts</a></li>
              <li className={styles.linkItem}><a href="#hosting-resources">Hosting resources</a></li>
              <li className={styles.linkItem}><a href="#community-forum">Community forum</a></li>
              <li className={styles.linkItem}><a href="#hosting-responsibly">Hosting responsibly</a></li>
              <li className={styles.linkItem}><a href="#join-free-class">Join a free Hosting class</a></li>
            </ul>
          </div>

          {/* Column 3: Airbnb */}
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>Airbnb</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#newsroom">Newsroom</a></li>
              <li className={styles.linkItem}><a href="#new-features">New features</a></li>
              <li className={styles.linkItem}><a href="#careers">Careers</a></li>
              <li className={styles.linkItem}><a href="#investors">Investors</a></li>
              <li className={styles.linkItem}><a href="#emergency-stays">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Locale Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>© 2026 Airbnb, Inc.</span>
            <span className={styles.dotSeparator}>·</span>
            <a href="#privacy" className={styles.legalLink}>Privacy</a>
            <span className={styles.dotSeparator}>·</span>
            <a href="#terms" className={styles.legalLink}>Terms</a>
            <span className={styles.dotSeparator}>·</span>
            <a href="#sitemap" className={styles.legalLink}>Sitemap</a>
            <span className={styles.dotSeparator}>·</span>
            <a href="#company-details" className={styles.legalLink}>Company details</a>
          </div>

          <div className={styles.bottomRight}>
            <button type="button" className={styles.localeButton} aria-label="Language: English (IN)">
              <GlobeIcon size={16} />
              <span>English (IN)</span>
            </button>
            <button type="button" className={styles.currencyButton} aria-label="Currency: INR">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
