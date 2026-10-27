import React from 'react';
import styles from './HighlightsSection.module.css';
import { WorkspaceIcon, PoolIcon, CheckInIcon } from '../../common/Icons';

export interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HighlightsSection: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      icon: <CheckInIcon size={24} />,
      title: 'Self check-in',
      description: 'Check yourself in with the keypad.',
    },
    {
      icon: <WorkspaceIcon size={24} />,
      title: 'Dedicated workspace',
      description: 'A room with wifi that’s well-suited for working.',
    },
    {
      icon: <PoolIcon size={24} />,
      title: 'Dive right in',
      description: 'This is one of the few places in the area with a pool.',
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
