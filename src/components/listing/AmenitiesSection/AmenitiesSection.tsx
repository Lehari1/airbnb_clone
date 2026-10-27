import React, { useState } from 'react';
import styles from './AmenitiesSection.module.css';
import { AmenityItem } from '../../../data/types';
import { renderAmenityIcon } from './amenityIconHelper';
import { AmenitiesModal } from './AmenitiesModal';

export interface AmenitiesSectionProps {
  amenities: AmenityItem[];
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Top 10 popular amenities displayed on the listing page
  const visibleAmenities = amenities.slice(0, 10);

  return (
    <section className={styles.amenitiesSection} aria-label="Amenities and features">
      <h3 className={styles.sectionTitle}>What this place offers</h3>

      <div className={styles.amenitiesGrid}>
        {visibleAmenities.map((item) => (
          <div key={item.id} className={styles.amenityRow}>
            <span className={styles.amenityIcon} aria-hidden="true">
              {renderAmenityIcon(item.iconName)}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.showAllButton}
        onClick={() => setIsModalOpen(true)}
        aria-label={`Show all ${amenities.length} amenities in modal`}
      >
        Show all {amenities.length} amenities
      </button>

      {/* Categorized 50-Amenities Modal */}
      <AmenitiesModal
        isOpen={isModalOpen}
        amenities={amenities}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AmenitiesSection;
