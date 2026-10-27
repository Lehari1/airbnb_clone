import React from 'react';
import { SiteHeader } from './components/layout/SiteHeader/SiteHeader';
import { ListingHeading } from './components/listing/ListingHeading/ListingHeading';
import { HeroPhotoGrid } from './components/listing/HeroPhotoGrid/HeroPhotoGrid';
import { ListingOverview } from './components/listing/ListingOverview/ListingOverview';
import { listingData } from './data';
import { useUrlModalState } from './hooks';

export const App: React.FC = () => {
  const {
    isPhotoTourOpen,
    activeRoomSection,
    activePhotoId,
    openPhotoTour,
    closeModal,
  } = useUrlModalState();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-white)' }}>
      {/* 1. Top Navigation Bar */}
      <SiteHeader
        onSearchClick={() => console.log('Search clicked')}
        onHostClick={() => console.log('Become a host clicked')}
        onUserMenuClick={() => console.log('User menu clicked')}
      />

      {/* 2. Main Content Container (Max width: 1120px) */}
      <main className="container" style={{ paddingBottom: '80px' }}>
        {/* Title row with Share and Save actions */}
        <ListingHeading
          title={listingData.title}
          onSaveToggle={(isSaved) => console.log('Wishlist status:', isSaved)}
        />

        {/* 5-Image Hero Bento Grid */}
        <HeroPhotoGrid
          photos={listingData.allPhotos}
          onShowAllPhotos={() => openPhotoTour()}
          onHeroPhotoClick={({ sectionId, photoId }) =>
            openPhotoTour({ sectionId, photoId })
          }
        />

        {/* Property Summary Row ("Entire serviced apartment in Candolim, India", bed/bath line, discount & favourite card) */}
        <ListingOverview
          propertyType={listingData.propertyType}
          guestCapacity={listingData.guestCapacity}
          bedroomsCount={listingData.bedroomsCount}
          bedsCount={listingData.bedsCount}
          bathroomsCount={listingData.bathroomsCount}
          overallRating={listingData.overallRating}
          totalReviews={listingData.totalReviews}
          isGuestFavourite={listingData.isGuestFavourite}
          onReviewsClick={() => console.log('Reviews clicked')}
          onClaimDiscount={() => console.log('Discount claimed')}
        />
      </main>

      {/* Modal State Debug Overlay for verification until Photo Tour view is fully implemented */}
      {isPhotoTourOpen && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Photo tour overlay active"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'var(--color-text-dark)',
            color: 'var(--color-text-light)',
            padding: '16px 24px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-modal)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            animation: 'fadeIn 200ms ease',
          }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>
              Photo Tour State: Active
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-border-medium)' }}>
              Section: {activeRoomSection || 'Default (living-room-1)'} | Photo: {activePhotoId || 'hero-0'}
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            style={{
              backgroundColor: 'var(--color-surface-white)',
              color: 'var(--color-text-dark)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </aside>
      )}
    </div>
  );
};

export default App;
