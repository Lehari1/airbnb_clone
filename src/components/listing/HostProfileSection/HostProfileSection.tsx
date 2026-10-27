import React from 'react';
import { HostProfile } from '@/data/types';
import styles from './HostProfileSection.module.css';

interface HostProfileSectionProps {
  host: HostProfile;
  onContactHost?: () => void;
}

const LETTER_AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  S: { bg: '#FCE4EC', text: '#C2185B' },
  A: { bg: '#E1F5FE', text: '#0288D1' },
};

export const HostProfileSection: React.FC<HostProfileSectionProps> = ({
  host,
  onContactHost,
}) => {
  return (
    <section className={styles.hostProfileSection} aria-labelledby="meet-host-heading">
      <h2 id="meet-host-heading" className={styles.heading}>
        Meet your host
      </h2>

      <div className={styles.containerGrid}>
        {/* Left Column: Host Profile Card */}
        <div className={styles.hostCard}>
          {/* Avatar & Name */}
          <div className={styles.avatarColumn}>
            <div className={styles.avatarWrapper}>
              <div className={styles.hostAvatar}>
                MIRASHYA
                <br />
                HOMES
              </div>
              {host.isVerified && (
                <div className={styles.badgeVerified} title="Identity verified">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>

            <div className={styles.hostName}>{host.name}</div>
            <div className={styles.hostRole}>Host</div>
          </div>

          {/* Stats Column */}
          <div className={styles.statsColumn}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{host.reviewsCount.toLocaleString()}</span>
              <span className={styles.statLabel}>Reviews</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statValue}>{host.rating} ★</span>
              <span className={styles.statLabel}>Rating</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statValue}>{host.hostingYears}</span>
              <span className={styles.statLabel}>Years hosting</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts & Host Details */}
        <div className={styles.detailsColumn}>
          <h3 className={styles.sectionSubheading}>Co-Hosts</h3>
          <div className={styles.coHostsGrid}>
            {host.coHosts.map((coHost, idx) => {
              const letter = coHost.name.charAt(0);
              const colorConfig = LETTER_AVATAR_COLORS[letter] || { bg: '#F7F7F7', text: '#222222' };

              return (
                <div key={`cohost-${idx}-${coHost.name}`} className={styles.coHostItem}>
                  <div
                    className={styles.coHostAvatarCircle}
                    style={
                      !coHost.avatarUrl
                        ? { backgroundColor: colorConfig.bg, color: colorConfig.text }
                        : undefined
                    }
                  >
                    {coHost.avatarUrl ? (
                      <img
                        src={coHost.avatarUrl}
                        alt={coHost.name}
                        className={styles.coHostPhoto}
                        loading="lazy"
                      />
                    ) : (
                      <span>{letter}</span>
                    )}
                  </div>
                  <span className={styles.coHostName}>{coHost.name}</span>
                </div>
              );
            })}
          </div>

          <h3 className={styles.sectionSubheading}>Host details</h3>
          <div className={styles.hostDetailsBlock}>
            <div className={styles.detailRow}>Response rate: {host.responseRate}</div>
            <div className={styles.detailRow}>Responds {host.responseTime}</div>
          </div>

          <button
            type="button"
            className={styles.contactButton}
            onClick={onContactHost}
          >
            Contact Host
          </button>
        </div>
      </div>
    </section>
  );
};

export default HostProfileSection;
