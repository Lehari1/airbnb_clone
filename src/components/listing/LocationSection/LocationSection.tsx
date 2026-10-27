import React, { useState } from 'react';
import { SearchIcon, ChevronRightIcon } from '@/components/common/Icons';
import styles from './LocationSection.module.css';

interface LocationSectionProps {
  location: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.15, 0.7));
  };

  return (
    <section className={styles.locationSection} aria-labelledby="location-heading">
      <h2 id="location-heading" className={styles.heading}>
        Where you’ll be
      </h2>
      <p className={styles.locationTitle}>{location}</p>

      {/* Styled Interactive Map */}
      <div className={styles.mapContainer} role="region" aria-label="Interactive map of Candolim area">
        {/* Search Control */}
        <button type="button" className={styles.searchButton} aria-label="Search area">
          <SearchIcon size={16} />
        </button>

        {/* Zoom Controls */}
        <div className={styles.zoomControls}>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            −
          </button>
        </div>

        {/* Map Terrain Canvas (Scalable with Zoom) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: `scale(${zoomLevel})`,
            transition: 'transform 200ms ease-out',
            transformOrigin: 'center center',
          }}
        >
          {/* Subtle Land Grid */}
          <div className={styles.mapGridLines} />

          {/* Green Landmark Zones */}
          <div className={styles.landmarkZone1} />
          <div className={styles.landmarkZone2} />

          {/* Center House Pin */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={styles.centerPinWrapper}>
              <div className={styles.pinRadiusCircle} />
              <div className={styles.pinIconCircle} title="Candolim Luxury Stay">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 9.5L12 3l9 6.5" />
                  <path d="M19 10v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10" />
                  <path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information below Map */}
      <p className={styles.exactLocationNote}>
        Exact location will be provided after booking.
      </p>

      <div>
        <h3 className={styles.highlightsSubheading}>Neighbourhood highlights</h3>
        <p className={styles.highlightsText}>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to
          beaches, cafés, and popular attractions.
          {isExpanded && (
            <span>
              {' '}
              Candolim Beach is known for its wide sandy shores, tranquil atmosphere, water sports,
              and authentic Goan beach shacks. Fort Aguada and vibrant Calangute are both within a
              convenient 10-minute drive.
            </span>
          )}
        </p>

        <button
          type="button"
          className={styles.showMoreLink}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRightIcon size={14} />
        </button>
      </div>
    </section>
  );
};

export default LocationSection;
