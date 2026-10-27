import React from 'react';

export interface SearchHouseIconProps {
  size?: number;
  className?: string;
}

export const SearchHouseIcon: React.FC<SearchHouseIconProps> = ({
  size = 28,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tree behind house on the right */}
      {/* Tree slender trunk */}
      <rect x="21" y="11" width="2.2" height="15" rx="0.5" fill="#795548" />

      {/* Warm natural green tree foliage matching reference */}
      <circle cx="22" cy="8" r="4.8" fill="#7CB342" />
      <circle cx="19.5" cy="7" r="3.2" fill="#9CCC65" />
      <circle cx="23.5" cy="6.2" r="3.2" fill="#AED581" />
      <circle cx="24.5" cy="9.8" r="3" fill="#558B2F" />
      <circle cx="20.5" cy="10.8" r="2.5" fill="#689F38" />

      {/* Roof chimney / flue pipe */}
      <rect x="9" y="3.5" width="1.6" height="5.5" rx="0.4" fill="#37474F" />
      <rect x="8.5" y="3" width="2.6" height="1" rx="0.3" fill="#263238" />

      {/* House Main Body / Facade */}
      <path
        d="M5.5 10 L19 13.6 V26 H5.5 V10 Z"
        fill="#E8ECEF"
      />
      {/* Left side corner perspective shadow */}
      <path
        d="M5.5 10 L7.5 10.5 V26 H5.5 Z"
        fill="#D0D7DE"
      />

      {/* Modern Mono-Pitch (Shed) Roof - sloping left-to-right */}
      <path
        d="M4 9 L20.5 13.5 L19.9 15.2 L3.4 10.7 Z"
        fill="#263238"
      />
      <path
        d="M4 9 L20.5 13.5"
        stroke="#455A64"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Bright Vibrant Red Door */}
      <rect x="8.8" y="16.5" width="4.8" height="9.5" rx="0.8" fill="#FF385C" />
      <rect
        x="8.8"
        y="16.5"
        width="4.8"
        height="9.5"
        rx="0.8"
        stroke="#E00B41"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Doorknob */}
      <circle cx="10" cy="21.5" r="0.6" fill="#FFFFFF" />

      {/* Upper window on right wall */}
      <rect x="14.8" y="15.8" width="3.2" height="3.2" rx="0.5" fill="#90A4AE" />
      <rect
        x="14.8"
        y="15.8"
        width="3.2"
        height="3.2"
        rx="0.5"
        stroke="#B0BEC5"
        strokeWidth="0.4"
        fill="none"
      />
      <line x1="16.4" y1="15.8" x2="16.4" y2="19" stroke="#ECEFF1" strokeWidth="0.4" />
      <line x1="14.8" y1="17.4" x2="18" y2="17.4" stroke="#ECEFF1" strokeWidth="0.4" />

      {/* Baseline ground shadow */}
      <line
        x1="4"
        y1="26"
        x2="25.5"
        y2="26"
        stroke="#B0BEC5"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
