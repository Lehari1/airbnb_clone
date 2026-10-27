import React from 'react';
import styles from './HighlightsSection.module.css';
import {
  OutdoorEntertainmentIcon,
  CoolingFanIcon,
  BuildingStaffCheckInIcon,
} from '../../common/Icons';

export interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HighlightsSection: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      icon: <OutdoorEntertainmentIcon size={24} />,
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
    },
    {
      icon: <CoolingFanIcon size={24} />,
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
    },
    {
      icon: <BuildingStaffCheckInIcon size={24} />,
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
    },
  ];

  return (
    <section className={styles.highlightsList} aria-label="Listing highlights">
      {highlights.map((item, index) => (
        <div key={index} className={styles.highlightItem}>
          <div className={styles.highlightIcon} aria-hidden="true">
            {item.icon}
          </div>
          <div className={styles.highlightText}>
            <h4 className={styles.highlightTitle}>{item.title}</h4>
            <p className={styles.highlightDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HighlightsSection;
