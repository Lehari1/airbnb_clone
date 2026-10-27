import React, { useEffect, useCallback, useRef, useState } from 'react';
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
  const [direction, setDirection] = useState<'next' | 'prev' | 'initial'>('initial');
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useScrollLock(isOpen);
  useFocusTrap(isOpen, containerRef, 'button[aria-label="Close photo viewer"]');

  const totalPhotos = photos.length;
  const currentPhoto = photos[currentIndex] || photos[0];

  // Preload adjacent images (previous and next)
  useEffect(() => {
    if (!isOpen) return;

    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    if (prevIndex >= 0 && photos[prevIndex]) {
      const prevImg = new Image();
      prevImg.src = photos[prevIndex].url;
    }

    if (nextIndex < photos.length && photos[nextIndex]) {
      const nextImg = new Image();
      nextImg.src = photos[nextIndex].url;
    }
  }, [isOpen, currentIndex, photos]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();

      // Ensure focus is explicitly restored to the active photo thumbnail in the Photo Tour
      if (currentPhoto) {
        requestAnimationFrame(() => {
          const thumbEl = document.getElementById(`photo-${currentPhoto.id}`);
          if (thumbEl) {
            thumbEl.focus();
          }
        });
      }
    }, 180);
  }, [onClose, currentPhoto]);

  // Hook up Escape key to close Lightbox and return to Photo Tour
  useEscapeKey(handleClose, isOpen && !isClosing);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection('prev');
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalPhotos - 1) {
      setDirection('next');
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, totalPhotos, onNavigate]);

  // Arrow key navigation (Left / Right)
  useEffect(() => {
    if (!isOpen || isClosing) return;

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
  }, [isOpen, isClosing, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  // Determine transition animation class based on navigation direction
  const getImageAnimationClass = () => {
    if (direction === 'next') return styles.slideNext;
    if (direction === 'prev') return styles.slidePrev;
    return styles.initialFade;
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.lightboxBackdrop} ${isClosing ? styles.lightboxClosing : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      aria-roledescription="carousel"
      tabIndex={-1}
    >
      {/* Visually hidden announcement for screen readers */}
      <div className={styles.srOnly} aria-live="polite" aria-atomic="true">
        {`Photo ${currentIndex + 1} of ${totalPhotos}: ${currentPhoto.caption || currentPhoto.alt}`}
      </div>

      {/* Top Header Bar */}
      <header className={styles.lightboxHeader}>
        <div className={styles.leftControls}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close photo viewer"
          >
            <CloseIcon size={16} />
            <span>Close</span>
          </button>
        </div>

        <div className={styles.counter} aria-label={`Photo ${currentIndex + 1} of ${totalPhotos}`}>
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
          aria-disabled={currentIndex <= 0}
        >
          <ChevronLeftIcon size={18} />
        </button>

        {/* Centered Image Canvas */}
        <div className={styles.imageCanvas}>
          <img
            key={`${currentPhoto.id}-${currentIndex}`}
            src={currentPhoto.url}
            alt={currentPhoto.alt || currentPhoto.caption || `Photo ${currentIndex + 1} of ${totalPhotos}`}
            className={`${styles.lightboxImage} ${getImageAnimationClass()}`}
            draggable={false}
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          className={styles.navArrowButton}
          onClick={handleNext}
          disabled={currentIndex >= totalPhotos - 1}
          aria-label="Next photo"
          aria-disabled={currentIndex >= totalPhotos - 1}
        >
          <ChevronRightIcon size={18} />
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
