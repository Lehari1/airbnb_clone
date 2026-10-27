import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ChevronLeftIcon,
  ShareIcon,
  HeartIcon,
} from '@/components/common/Icons';
import { useScrollLock, useFocusTrap, useEscapeKey } from '@/hooks';
import { RoomSection, ListingPhoto, RoomCategory } from '@/data/types';
import styles from './PhotoTourModal.module.css';

interface PhotoTourModalProps {
  isOpen: boolean;
  roomSections: RoomSection[];
  allPhotos: ListingPhoto[];
  activeSection?: RoomCategory;
  activePhotoId?: string;
  onClose: () => void;
  onPhotoClick: (photoIndex: number) => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  roomSections,
  allPhotos,
  activeSection,
  activePhotoId,
  onClose,
  onPhotoClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const categoryBarRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<RoomCategory>(
    activeSection || (roomSections[0]?.id as RoomCategory) || 'living-room-1'
  );

  useScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);
  useFocusTrap(isOpen, containerRef, 'button[aria-label="Back"]');

  // Sync activeCategory when activeSection prop changes
  useEffect(() => {
    if (activeSection) {
      setActiveCategory(activeSection);
    }
  }, [activeSection]);

  // Deep-scroll to target section or photo on open
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      let targetEl: HTMLElement | null = null;

      if (activePhotoId) {
        targetEl = document.getElementById(`photo-${activePhotoId}`);
      }

      if (!targetEl && activeSection) {
        targetEl = document.getElementById(`section-${activeSection}`);
      }

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [isOpen, activeSection, activePhotoId]);

  // Scroll tracking with IntersectionObserver to update active category thumbnail
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const observerRoot = containerRef.current;
    const sectionElements = roomSections
      .map((room) => document.getElementById(`section-${room.id}`))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace('section-', '') as RoomCategory;
            setActiveCategory(sectionId);

            // Auto-scroll the thumbnail bar so active tab is visible
            const activeTabButton = document.getElementById(`tab-${sectionId}`);
            if (activeTabButton && categoryBarRef.current) {
              const bar = categoryBarRef.current;
              const tabRect = activeTabButton.getBoundingClientRect();
              const barRect = bar.getBoundingClientRect();

              if (tabRect.left < barRect.left || tabRect.right > barRect.right) {
                activeTabButton.scrollIntoView({
                  behavior: 'smooth',
                  inline: 'nearest',
                  block: 'nearest',
                });
              }
            }
          }
        });
      },
      {
        root: observerRoot,
        rootMargin: '-88px 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [isOpen, roomSections]);

  const handleTabClick = useCallback((roomId: RoomCategory) => {
    setActiveCategory(roomId);
    const targetEl = document.getElementById(`section-${roomId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handlePhotoSelect = useCallback(
    (photo: ListingPhoto) => {
      const index = allPhotos.findIndex((p) => p.id === photo.id);
      onPhotoClick(index >= 0 ? index : 0);
    },
    [allPhotos, onPhotoClick]
  );

  if (!isOpen) return null;

  // Render individual room grid according to the spec pattern
  const renderRoomGrid = (roomId: string, photos: ListingPhoto[]) => {
    if (photos.length === 1) {
      const p = photos[0];
      return (
        <div className={styles.photoStreamCol}>
          <button
            type="button"
            id={`photo-${p.id}`}
            className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
            onClick={() => handlePhotoSelect(p)}
            aria-label={`Photo: ${p.caption || p.alt}`}
          >
            <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
          </button>
        </div>
      );
    }

    if (photos.length === 2) {
      return (
        <div className={styles.twoColumnRow}>
          {photos.map((p) => (
            <button
              key={p.id}
              type="button"
              id={`photo-${p.id}`}
              className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
              onClick={() => handlePhotoSelect(p)}
              aria-label={`Photo: ${p.caption || p.alt}`}
            >
              <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
            </button>
          ))}
        </div>
      );
    }

    if (photos.length === 3) {
      const first = photos[0];
      const paired = photos.slice(1, 3);
      return (
        <div className={styles.photoStreamCol}>
          <button
            type="button"
            id={`photo-${first.id}`}
            className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
            onClick={() => handlePhotoSelect(first)}
            aria-label={`Photo: ${first.caption || first.alt}`}
          >
            <img src={first.url} alt={first.alt || first.caption} className={styles.photoImage} />
          </button>
          <div className={styles.twoColumnRow}>
            {paired.map((p) => (
              <button
                key={p.id}
                type="button"
                id={`photo-${p.id}`}
                className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
                onClick={() => handlePhotoSelect(p)}
                aria-label={`Photo: ${p.caption || p.alt}`}
              >
                <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (photos.length === 4) {
      const first = photos[0];
      const paired = photos.slice(1, 3);
      const last = photos[3];
      return (
        <div className={styles.photoStreamCol}>
          <button
            type="button"
            id={`photo-${first.id}`}
            className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
            onClick={() => handlePhotoSelect(first)}
            aria-label={`Photo: ${first.caption || first.alt}`}
          >
            <img src={first.url} alt={first.alt || first.caption} className={styles.photoImage} />
          </button>
          <div className={styles.twoColumnRow}>
            {paired.map((p) => (
              <button
                key={p.id}
                type="button"
                id={`photo-${p.id}`}
                className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
                onClick={() => handlePhotoSelect(p)}
                aria-label={`Photo: ${p.caption || p.alt}`}
              >
                <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
              </button>
            ))}
          </div>
          <button
            type="button"
            id={`photo-${last.id}`}
            className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
            onClick={() => handlePhotoSelect(last)}
            aria-label={`Photo: ${last.caption || last.alt}`}
          >
            <img src={last.url} alt={last.alt || last.caption} className={styles.photoImage} />
          </button>
        </div>
      );
    }

    if (roomId === 'exterior' || photos.length === 5) {
      const pair1 = photos.slice(0, 2);
      const middle = photos[2];
      const pair2 = photos.slice(3, 5);
      return (
        <div className={styles.photoStreamCol}>
          <div className={styles.twoColumnRow}>
            {pair1.map((p) => (
              <button
                key={p.id}
                type="button"
                id={`photo-${p.id}`}
                className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
                onClick={() => handlePhotoSelect(p)}
                aria-label={`Photo: ${p.caption || p.alt}`}
              >
                <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
              </button>
            ))}
          </div>
          {middle && (
            <button
              type="button"
              id={`photo-${middle.id}`}
              className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
              onClick={() => handlePhotoSelect(middle)}
              aria-label={`Photo: ${middle.caption || middle.alt}`}
            >
              <img src={middle.url} alt={middle.alt || middle.caption} className={styles.photoImage} />
            </button>
          )}
          {pair2.length > 0 && (
            <div className={styles.twoColumnRow}>
              {pair2.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  id={`photo-${p.id}`}
                  className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
                  onClick={() => handlePhotoSelect(p)}
                  aria-label={`Photo: ${p.caption || p.alt}`}
                >
                  <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    // For Additional photos (19 photos) or any larger set:
    // Render an alternating pattern: 1 full-width, then 2 paired, 1 full-width, 2 paired, etc.
    const elements: React.ReactNode[] = [];
    let idx = 0;
    let isFullWidthTurn = false;

    while (idx < photos.length) {
      if (isFullWidthTurn || idx === photos.length - 1) {
        const p = photos[idx];
        elements.push(
          <button
            key={p.id}
            type="button"
            id={`photo-${p.id}`}
            className={`${styles.photoButton} ${styles.fullWidthLandscape}`}
            onClick={() => handlePhotoSelect(p)}
            aria-label={`Photo: ${p.caption || p.alt}`}
          >
            <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
          </button>
        );
        idx += 1;
        isFullWidthTurn = false;
      } else {
        const pair = photos.slice(idx, idx + 2);
        elements.push(
          <div key={`pair-${pair[0].id}`} className={styles.twoColumnRow}>
            {pair.map((p) => (
              <button
                key={p.id}
                type="button"
                id={`photo-${p.id}`}
                className={`${styles.photoButton} ${styles.halfWidthPhoto}`}
                onClick={() => handlePhotoSelect(p)}
                aria-label={`Photo: ${p.caption || p.alt}`}
              >
                <img src={p.url} alt={p.alt || p.caption} className={styles.photoImage} />
              </button>
            ))}
          </div>
        );
        idx += 2;
        isFullWidthTurn = true;
      }
    }

    return <div className={styles.photoStreamCol}>{elements}</div>;
  };

  return (
    <div
      ref={containerRef}
      className={styles.photoTourOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      tabIndex={-1}
    >
      {/* Top Header Bar */}
      <header className={styles.headerBar}>
        <div className={styles.headerLeft}>
          <button
            type="button"
            className={styles.iconCircleButton}
            onClick={onClose}
            aria-label="Back"
          >
            <ChevronLeftIcon size={18} />
          </button>
        </div>

        <div className={styles.headerTitle}>Photo tour</div>

        <div className={styles.headerRight}>
          <button type="button" className={styles.iconCircleButton} aria-label="Share">
            <ShareIcon size={18} />
          </button>
          <button type="button" className={styles.iconCircleButton} aria-label="Save">
            <HeartIcon size={18} />
          </button>
        </div>
      </header>

      {/* Main Tour Content */}
      <main className={styles.tourContent}>
        {/* Top Thumbnail Category Bar */}
        <div className={styles.categoryBarWrapper}>
          <div
            ref={categoryBarRef}
            className={styles.categoryBar}
            role="tablist"
            aria-label="Photo categories"
          >
            {roomSections.map((room) => {
              const isActive = activeCategory === room.id;
              return (
                <button
                  key={room.id}
                  id={`tab-${room.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`section-${room.id}`}
                  className={`${styles.categoryTab} ${isActive ? styles.categoryTabActive : ''}`}
                  onClick={() => handleTabClick(room.id as RoomCategory)}
                >
                  <img
                    src={room.thumbnailUrl}
                    alt=""
                    className={styles.thumbnailImg}
                    loading="lazy"
                  />
                  <span className={styles.categoryLabel}>{room.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Room Sections Stream */}
        {roomSections.map((room) => (
          <section
            key={room.id}
            id={`section-${room.id}`}
            className={styles.roomSection}
            aria-labelledby={`heading-${room.id}`}
          >
            {/* Left Sticky Room Description */}
            <div className={styles.roomInfoCol}>
              <h2 id={`heading-${room.id}`} className={styles.roomTitle}>
                {room.title}
              </h2>
              {room.subtitle && (
                <p className={styles.roomSubtitle}>{room.subtitle}</p>
              )}
            </div>

            {/* Right Photo Stream */}
            <div className={styles.photoStreamCol}>
              {renderRoomGrid(room.id, room.photos)}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PhotoTourModal;
