import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@/components/common/Icons';
import styles from './MoreStaysNearby.module.css';

interface NearbyStay {
  id: string;
  title: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const NEARBY_STAYS: NearbyStay[] = [
  // Page 1
  {
    id: 'stay-1',
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: 4.91,
    imageUrl: '/images/stays/stay-1.png',
  },
  {
    id: 'stay-2',
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: 4.95,
    imageUrl: '/images/stays/stay-2.png',
  },
  {
    id: 'stay-3',
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: 4.94,
    imageUrl: '/images/stays/stay-3.png',
  },
  {
    id: 'stay-4',
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: 4.96,
    imageUrl: '/images/stays/stay-4.png',
  },
  {
    id: 'stay-5',
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: 4.95,
    imageUrl: '/images/stays/stay-5.png',
  },
  // Page 2
  {
    id: 'stay-6',
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: 5.0,
    imageUrl:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stay-7',
    title: 'Seaglass Villa Candolim | Private Pool',
    price: '₹38,200',
    rating: 4.92,
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stay-8',
    title: 'Oasis Retreat Calangute | Tropical Garden',
    price: '₹26,450',
    rating: 4.89,
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stay-9',
    title: 'Candolim Palm Grove Luxury Suite',
    price: '₹31,500',
    rating: 4.97,
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'stay-10',
    title: 'Casa Candolim Vista | Jacuzzi Suite',
    price: '₹35,800',
    rating: 4.94,
    imageUrl:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80',
  },
];

export const MoreStaysNearby: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(NEARBY_STAYS.length / itemsPerPage);

  const displayedStays = NEARBY_STAYS.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className={styles.staysNearbySection} aria-labelledby="stays-nearby-heading">
      <div className={styles.headerRow}>
        <h2 id="stays-nearby-heading" className={styles.heading}>
          More stays nearby
        </h2>

        <div className={styles.controls}>
          <span className={styles.pageIndicator}>
            {page} / {totalPages}
          </span>
          <div className={styles.arrowButtons}>
            <button
              type="button"
              className={styles.navArrowBtn}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page <= 1}
              aria-label="Previous stays"
            >
              <ChevronLeftIcon size={14} />
            </button>
            <button
              type="button"
              className={styles.navArrowBtn}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page >= totalPages}
              aria-label="Next stays"
            >
              <ChevronRightIcon size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {displayedStays.map((stay) => (
          <div key={stay.id} className={styles.stayCard} role="button" tabIndex={0}>
            <div className={styles.imageWrapper}>
              <img
                src={stay.imageUrl}
                alt={stay.title}
                className={styles.stayImage}
                loading="lazy"
              />
            </div>
            <h3 className={styles.stayTitle} title={stay.title}>
              {stay.title}
            </h3>
            <div className={styles.stayMetaRow}>
              <span className={styles.stayPrice}>{stay.price}</span>
              <span className={styles.stayRating}>
                <StarIcon size={12} color="#222222" />
                <span>{stay.rating.toFixed(2)}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStaysNearby;
