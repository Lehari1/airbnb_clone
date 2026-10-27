import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isSuperhost?: boolean;
  fallbackText?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  isSuperhost = false,
  fallbackText,
  className,
}) => {
  const [hasError, setHasError] = useState(false);

  const initial = (fallbackText || alt).charAt(0).toUpperCase();

  return (
    <div className={clsx(styles.avatarContainer, styles[size], className)}>
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className={styles.avatarImage}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className={styles.avatarFallback} aria-hidden="true">
          {initial || (
            <svg viewBox="0 0 32 32" width="60%" height="60%" fill="currentColor">
              <path d="M16 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 18c-6.075 0-11 3.582-11 8v2h22v-2c0-4.418-4.925-8-11-8z" />
            </svg>
          )}
        </div>
      )}

      {isSuperhost && (
        <div className={styles.superhostBadge} title="Superhost" aria-label="Superhost badge">
          <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor" aria-hidden="true">
            <path d="M8 0l2.4 4.8 5.6.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.6-.8z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Avatar;
