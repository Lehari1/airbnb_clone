import React from 'react';
import { SiteHeader } from './components/layout/SiteHeader/SiteHeader';
import { ListingHeading } from './components/listing/ListingHeading/ListingHeading';
import { HeroPhotoGrid } from './components/listing/HeroPhotoGrid/HeroPhotoGrid';
import { ListingOverview } from './components/listing/ListingOverview/ListingOverview';
import { HostSummary } from './components/listing/HostSummary/HostSummary';
import { HighlightsSection } from './components/listing/HighlightsSection/HighlightsSection';
import { DescriptionSection } from './components/listing/DescriptionSection/DescriptionSection';
import { SleepingArrangements } from './components/listing/SleepingArrangements/SleepingArrangements';
import { AmenitiesSection } from './components/listing/AmenitiesSection/AmenitiesSection';
import { CalendarSection } from './components/listing/CalendarSection/CalendarSection';
import { ReviewsSection } from './components/listing/ReviewsSection/ReviewsSection';
import { LocationSection } from './components/listing/LocationSection/LocationSection';
import { HostProfileSection } from './components/listing/HostProfileSection/HostProfileSection';
import { ThingsToKnowSection } from './components/listing/ThingsToKnowSection/ThingsToKnowSection';
import { MoreStaysNearby } from './components/listing/MoreStaysNearby/MoreStaysNearby';
import { StickyNavHeader } from './components/layout/StickyNavHeader/StickyNavHeader';
import { SiteFooter } from './components/layout/SiteFooter/SiteFooter';
import { PromoBanner } from './components/listing/PromoBanner/PromoBanner';
import { ReservationCard } from './components/listing/ReservationCard/ReservationCard';
import { Divider } from './components/common/Divider/Divider';
import { PhotoTourModal } from './components/photoTour';
import { LightboxModal } from './components/lightbox';
import { listingData } from './data';
import { useUrlModalState } from './hooks';

export const App: React.FC = () => {
  const {
    isPhotoTourOpen,
    activeRoomSection,
    activePhotoId,
    activeLightboxPhotoIndex,
    openPhotoTour,
    openLightbox,
    closeModal,
    closeLightbox,
  } = useUrlModalState();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface-white)' }}>
      {/* 0. Sticky Sub-Navigation Header (Revealed when scrollY > 560px) */}
      <StickyNavHeader
        priceText="₹28,499 for 5 nights"
        rating={listingData.overallRating}
        reviewsCount={listingData.totalReviews}
        onReserveClick={() => {
          const el = document.querySelector('aside[aria-label="Reservation widget"]');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

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

        {/* 2-Column Main Listing Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr var(--reservation-card-width)',
            gap: '80px',
            position: 'relative',
          }}
        >
          {/* Left Column: Property Details & Sections */}
          <div>
            {/* Property Summary Row */}
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
            />

            <Divider spacing="md" />

            {/* Section 1: Host Summary & Room Highlights */}
            <HostSummary host={listingData.host} />
            <Divider spacing="none" />
            <HighlightsSection />

            <Divider spacing="none" />

            {/* Section 2: Property Description */}
            <DescriptionSection paragraphs={listingData.description} />

            <Divider spacing="none" />

            {/* Section 3: Sleeping Arrangements */}
            <SleepingArrangements arrangements={listingData.sleepingArrangements} />

            <Divider spacing="none" />

            {/* Section 4: Amenities */}
            <AmenitiesSection amenities={listingData.amenities} />

            <Divider spacing="none" />

            {/* Section 5: Calendar / Availability */}
            <CalendarSection />
          </div>

          {/* Right Column: Sticky Reservation Sidebar */}
          <div
            style={{
              position: 'sticky',
              top: '104px',
              alignSelf: 'start',
              zIndex: 'var(--z-sticky-card)',
              width: 'var(--reservation-card-width)',
            }}
          >
            <PromoBanner onClaim={() => console.log('Discount claimed')} />
            <ReservationCard
              pricing={listingData.pricing}
              onReserveClick={() => console.log('Reserve clicked')}
              onDateClick={() => console.log('Date clicked')}
            />
          </div>
        </div>

        <Divider spacing="none" />

        {/* Section 6: Reviews */}
        <ReviewsSection
          overallRating={listingData.overallRating}
          totalReviews={listingData.totalReviews}
          ratings={listingData.ratings}
          reviews={listingData.reviews}
        />

        <Divider spacing="none" />

        {/* Section 7: Location / Map */}
        <LocationSection location={listingData.location} />

        <Divider spacing="none" />

        {/* Section 8: Host Profile */}
        <HostProfileSection
          host={listingData.host}
          onContactHost={() => console.log('Contact host clicked')}
        />

        <Divider spacing="none" />

        {/* Section 9: Things to Know */}
        <ThingsToKnowSection />

        <Divider spacing="none" />

        {/* Section 10: More Stays Nearby */}
        <MoreStaysNearby />
      </main>

      {/* 11. Accessible Semantic Footer */}
      <SiteFooter />

      {/* Photo Tour Modal Overlay (View 2) */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        roomSections={listingData.roomSections}
        allPhotos={listingData.allPhotos}
        activeSection={activeRoomSection}
        activePhotoId={activePhotoId}
        onClose={closeModal}
        onPhotoClick={(idx) => openLightbox(idx)}
      />

      {/* Lightbox Single-Photo Modal (View 3) */}
      <LightboxModal
        isOpen={activeLightboxPhotoIndex !== undefined}
        currentIndex={activeLightboxPhotoIndex ?? 0}
        photos={listingData.allPhotos}
        onClose={closeLightbox}
        onNavigate={(idx) => openLightbox(idx)}
      />
    </div>
  );
};

export default App;

