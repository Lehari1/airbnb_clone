import React from 'react';
import styles from './HostSummary.module.css';
import { Avatar } from '../../common/Avatar/Avatar';
import { HostProfile } from '../../../data/types';

export interface HostSummaryProps {
  host: HostProfile;
}

export const HostSummary: React.FC<HostSummaryProps> = ({ host }) => {
  return (
    <div className={styles.hostSummaryContainer} aria-label={`Hosted by ${host.name}`}>
      <div className={styles.hostAvatar}>
        <Avatar
          src={host.avatarUrl}
          alt={host.name}
          size="md"
          isSuperhost={false}
        />
      </div>
      <div className={styles.hostInfo}>
        <h3 className={styles.hostedByTitle}>Hosted by {host.name}</h3>
        <p className={styles.superhostSubtitle}>
          {host.hostingYears} years hosting
        </p>
      </div>
    </div>
  );
};

export default HostSummary;
