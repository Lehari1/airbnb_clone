import React from 'react';
import styles from './HeroPhotoGrid.module.css';
import { GridIcon } from '../../common/Icons';
import { ListingPhoto, RoomCategory } from '../../../data/types';

export interface HeroPhotoGridProps {
  photos: ListingPhoto[];
  onShowAllPhotos: () => void;
  onHeroPhotoClick: (target: { sectionId: RoomCategory; photoId: string }) => void;
}

export const HeroPhotoGrid: React.FC<HeroPhotoGridProps> = ({
  photos,
  onShowAllPhotos,
  onHeroPhotoClick,
}) => {
  // Extract the 5 hero photos by position or fallback
  const heroMain =
    photos.find((p) => p.isHero && p.heroPosition === 'main') || photos[0];
  const heroTopMiddle =
    photos.find((p) => p.isHero && p.heroPosition === 'top-middle') || photos[1];
  const heroTopRight =
    photos.find((p) => p.isHero && p.heroPosition === 'top-right') || photos[2];
  const heroBottomMiddle =
    photos.find((p) => p.isHero && p.heroPosition === 'bottom-middle') || photos[3];
  const heroBottomRight =
    photos.find((p) => p.isHero && p.heroPosition === 'bottom-right') || photos[4];

  return (
    <section className={styles.heroGridContainer} aria-label="Listing photo gallery preview">
      {/* 1. Large Main Hero Image (Left) */}
      <div
        className={styles.mainPhotoContainer}
        role="button"
        tabIndex={0}
        aria-label={`Open photo tour to ${heroMain.caption || heroMain.alt}`}
        onClick={() =>
          onHeroPhotoClick({
            sectionId: heroMain.category,
            photoId: heroMain.id,
          })
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onHeroPhotoClick({
              sectionId: heroMain.category,
              photoId: heroMain.id,
            });
          }
        }}
      >
        <img
          src={heroMain.url}
          alt={heroMain.alt}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 2. Secondary 2x2 Bento Grid (Right) */}
      <div className={styles.secondaryGrid}>
        {/* Top-Middle Photo */}
        <div
          className={styles.secondaryPhotoContainer}
          role="button"
          tabIndex={0}
          aria-label={`Open photo tour to ${heroTopMiddle.caption || heroTopMiddle.alt}`}
          onClick={() =>
            onHeroPhotoClick({
              sectionId: heroTopMiddle.category,
              photoId: heroTopMiddle.id,
            })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onHeroPhotoClick({
                sectionId: heroTopMiddle.category,
                photoId: heroTopMiddle.id,
              });
            }
          }}
        >
          <img
            src={heroTopMiddle.url}
            alt={heroTopMiddle.alt}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Top-Right Photo */}
        <div
          className={styles.secondaryPhotoContainer}
          role="button"
          tabIndex={0}
          aria-label={`Open photo tour to ${heroTopRight.caption || heroTopRight.alt}`}
          onClick={() =>
            onHeroPhotoClick({
              sectionId: heroTopRight.category,
              photoId: heroTopRight.id,
            })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onHeroPhotoClick({
                sectionId: heroTopRight.category,
                photoId: heroTopRight.id,
              });
            }
          }}
        >
          <img
            src={heroTopRight.url}
            alt={heroTopRight.alt}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Bottom-Middle Photo */}
        <div
          className={styles.secondaryPhotoContainer}
          role="button"
          tabIndex={0}
          aria-label={`Open photo tour to ${heroBottomMiddle.caption || heroBottomMiddle.alt}`}
          onClick={() =>
            onHeroPhotoClick({
              sectionId: heroBottomMiddle.category,
              photoId: heroBottomMiddle.id,
            })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onHeroPhotoClick({
                sectionId: heroBottomMiddle.category,
                photoId: heroBottomMiddle.id,
              });
            }
          }}
        >
          <img
            src={heroBottomMiddle.url}
            alt={heroBottomMiddle.alt}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Bottom-Right Photo */}
        <div
          className={styles.secondaryPhotoContainer}
          role="button"
          tabIndex={0}
          aria-label={`Open photo tour to ${heroBottomRight.caption || heroBottomRight.alt}`}
          onClick={() =>
            onHeroPhotoClick({
              sectionId: heroBottomRight.category,
              photoId: heroBottomRight.id,
            })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onHeroPhotoClick({
                sectionId: heroBottomRight.category,
                photoId: heroBottomRight.id,
              });
            }
          }}
        >
          <img
            src={heroBottomRight.url}
            alt={heroBottomRight.alt}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* 3. Floating "Show all photos" Button */}
      <button
        type="button"
        className={styles.showAllPhotosButton}
        onClick={onShowAllPhotos}
        aria-label={`Show all ${photos.length} photos in full photo tour overlay`}
      >
        <GridIcon size={16} />
        <span>Show all photos</span>
      </button>
    </section>
  );
};

export default HeroPhotoGrid;
