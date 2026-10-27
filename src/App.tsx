import React from 'react';
import {
  Button,
  IconButton,
  Divider,
  Avatar,
  Rating,
  AirbnbLogoIcon,
  SearchIcon,
  HeartIcon,
  ShareIcon,
  GridIcon,
  LaurelWreathIcon,
  KitchenIcon,
  WifiIcon,
  PoolIcon,
  HotTubIcon,
  WorkspaceIcon,
} from './components/common';
import { listingData } from './data';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '64px' }}>
      {/* Top Header Placeholder */}
      <header
        style={{
          height: 'var(--header-height)',
          borderBottom: '1px solid var(--color-border-subtle)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AirbnbLogoIcon size={32} />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              border: '1px solid var(--color-border-light)',
              borderRadius: 'var(--radius-pill)',
              padding: '8px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
              Anywhere
            </span>
            <Divider orientation="vertical" spacing="none" />
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
              Any week
            </span>
            <Divider orientation="vertical" spacing="none" />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
              Add guests
            </span>
            <div
              style={{
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius-pill)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <SearchIcon size={14} color="#FFFFFF" />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button variant="ghost" size="sm">
              Airbnb your home
            </Button>
            <Avatar
              src={listingData.host.avatarUrl}
              alt={listingData.host.name}
              size="sm"
              isSuperhost={listingData.host.isSuperhost}
            />
          </div>
        </div>
      </header>

      {/* Main Container Demo */}
      <main className="container" style={{ paddingTop: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1
              style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              {listingData.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'var(--font-size-sm)' }}>
              <Rating score={listingData.overallRating} reviewsCount={listingData.totalReviews} />
              <span>·</span>
              <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                {listingData.location}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button variant="ghost" size="sm" leftIcon={<ShareIcon size={16} />}>
              Share
            </Button>
            <Button variant="ghost" size="sm" leftIcon={<HeartIcon size={16} />}>
              Save
            </Button>
          </div>
        </div>

        <Divider spacing="md" />

        {/* Hero Preview Card */}
        <div
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            position: 'relative',
            maxHeight: '400px',
          }}
        >
          <img
            src={listingData.allPhotos[3].url}
            alt={listingData.allPhotos[3].alt}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
            <Button variant="outline" size="sm" leftIcon={<GridIcon size={14} />}>
              Show all {listingData.allPhotos.length} photos
            </Button>
          </div>
        </div>

        <Divider spacing="lg" />

        {/* Foundation Primitives Showcase */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 372px', gap: '64px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <LaurelWreathIcon size={36} color="var(--color-primary)" />
              <div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                  Guest favourite
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                  One of the most loved homes on Airbnb, based on ratings, reviews, and reliability
                </p>
              </div>
            </div>

            <Divider spacing="md" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Avatar
                src={listingData.host.avatarUrl}
                alt={listingData.host.name}
                size="lg"
                isSuperhost={listingData.host.isSuperhost}
              />
              <div>
                <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-semibold)' }}>
                  Hosted by {listingData.host.name}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
                  Superhost · {listingData.host.hostingYears} years hosting
                </p>
              </div>
            </div>

            <Divider spacing="md" />

            <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: '16px' }}>
              Featured Amenities ({listingData.amenities.length} total)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <HotTubIcon size={24} />
                <span>Private hot tub & jacuzzi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <PoolIcon size={24} />
                <span>Shared swimming pool</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <WifiIcon size={24} />
                <span>Fast wifi (150 Mbps)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <KitchenIcon size={24} />
                <span>Full kitchen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <WorkspaceIcon size={24} />
                <span>Dedicated workspace</span>
              </div>
            </div>
          </div>

          {/* Pricing Preview Box */}
          <aside
            style={{
              border: '1px solid var(--color-border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              boxShadow: 'var(--shadow-card)',
              height: 'fit-content',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
              <span style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)' }}>
                ₹{listingData.pricing.nightlyRate.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>/ night</span>
            </div>
            <Button variant="gradient" size="lg" fullWidth>
              Reserve
            </Button>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
              <IconButton aria-label="Quick save" variant="outline" size="sm">
                <HeartIcon size={16} />
              </IconButton>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default App;
