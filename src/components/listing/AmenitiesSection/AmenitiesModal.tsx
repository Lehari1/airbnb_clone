import React, { useRef } from 'react';
import styles from './AmenitiesModal.module.css';
import { CloseIcon } from '../../common/Icons';
import { AmenityItem, AmenityCategory } from '../../../data/types';
import { useScrollLock, useFocusTrap, useEscapeKey } from '../../../hooks';
import { renderAmenityIcon } from './amenityIconHelper';

export interface AmenitiesModalProps {
  isOpen: boolean;
  amenities: AmenityItem[];
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  amenities,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);
  useFocusTrap(isOpen, modalRef);
  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  // Group amenities by category
  const categories = Array.from(new Set(amenities.map((a) => a.category))) as AmenityCategory[];

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={styles.modalContent}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className={styles.stickyHeader}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close amenities modal"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className={styles.scrollBody}>
          <h2 id="amenities-modal-title" className={styles.modalTitle}>
            What this place offers
          </h2>

          {categories.map((category) => {
            const categoryAmenities = amenities.filter((a) => a.category === category);
            return (
              <div key={category} className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.amenityList}>
                  {categoryAmenities.map((item) => (
                    <div key={item.id} className={styles.amenityItem}>
                      <span className={styles.amenityIcon} aria-hidden="true">
                        {renderAmenityIcon(item.iconName)}
                      </span>
                      <span className={item.isStrikethrough ? styles.strikethrough : undefined}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
