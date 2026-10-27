import React, { useEffect, useCallback, useRef } from 'react';
import {
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShareIcon,
  HeartIcon,
} from '@/components/common/Icons';
import { useScrollLock, useFocusTrap, useEscapeKey } from '@/hooks';
import { ListingPhoto } from '@/data/types';
import styles from './LightboxModal.module.css';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  photos: ListingPhoto[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);
  useFocusTrap(isOpen, containerRef);

  const totalPhotos = photos.length;
  const currentPhoto = photos[currentIndex] || photos[0];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalPhotos - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, totalPhotos, onNavigate]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      ref={containerRef}
      className={styles.lightboxBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      tabIndex={-1}
    >
      {/* Top Header */}
      <header className={styles.lightboxHeader}>
        <div className={styles.leftControls}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close photo viewer"
          >
            <CloseIcon size={16} />
            <span>Close</span>
          </button>
        </div>

        <div className={styles.counter} aria-live="polite">
          {currentIndex + 1} / {totalPhotos}
        </div>

        <div className={styles.rightControls}>
          <button type="button" className={styles.iconActionButton} aria-label="Share">
            <ShareIcon size={18} />
          </button>
          <button type="button" className={styles.iconActionButton} aria-label="Save">
            <HeartIcon size={18} />
          </button>
        </div>
      </header>

      {/* Main Photo Stage */}
      <main className={styles.stage}>
        {/* Previous Button */}
        <button
          type="button"
          className={styles.navArrowButton}
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          aria-label="Previous photo"
        >
          <ChevronLeftIcon size={20} />
        </button>

        {/* Centered Image */}
        <div className={styles.imageCanvas}>
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.alt || currentPhoto.caption}
            className={styles.lightboxImage}
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          className={styles.navArrowButton}
          onClick={handleNext}
          disabled={currentIndex >= totalPhotos - 1}
          aria-label="Next photo"
        >
          <ChevronRightIcon size={20} />
        </button>
      </main>

      {/* Bottom Caption Bar */}
      <footer className={styles.bottomCaptionBar}>
        <p className={styles.captionText}>
          {currentPhoto.caption || currentPhoto.alt}
        </p>
      </footer>
    </div>
  );
};

export default LightboxModal;
