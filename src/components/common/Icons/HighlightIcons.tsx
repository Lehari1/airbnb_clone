import React from 'react';
import { IconProps } from './types';

/**
 * Original SVG icon for Outdoor Entertainment (Campfire / Firepit)
 * Based on visual observation of Airbnb listing highlights
 */
export const OutdoorEntertainmentIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    {/* Brazier / Firepit base */}
    <path d="M4 19h24" />
    <path d="M7 19v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5" />
    {/* Central flame */}
    <path d="M16 5c-3 3.5-5.5 6.5-5.5 9.5a5.5 5.5 0 0 0 11 0c0-3-2.5-6-5.5-9.5z" />
    {/* Inner flame core */}
    <path d="M16 11.5c-1 1-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-.5-2-1.5-3z" />
  </svg>
);

/**
 * Original SVG icon for Designed for staying cool (Ceiling fan)
 * Based on visual observation of Airbnb listing highlights
 */
export const CoolingFanIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    {/* Center hub */}
    <circle cx="16" cy="16" r="2.5" />
    {/* Top blade */}
    <path d="M16 13.5c-1-3-4-6.5-4-8.5 0-1.5 1.5-2 3-1 2.5 1.5 3 6.5 1 9.5z" />
    {/* Right blade */}
    <path d="M18.5 16c3-1 6.5-4 8.5-4 1.5 0 2 1.5 1 3-1.5 2.5-6.5 3-9.5 1z" />
    {/* Bottom blade */}
    <path d="M16 18.5c1 3 4 6.5 4 8.5 0 1.5-1.5 2-3 1-2.5-1.5-3-6.5-1-9.5z" />
    {/* Left blade */}
    <path d="M13.5 16c-3 1-6.5 4-8.5 4-1.5 0-2-1.5-1-3 1.5-2.5 6.5-3 9.5-1z" />
  </svg>
);

/**
 * Original SVG icon for Building staff check-in (Door frame with door handle)
 * Based on visual observation of Airbnb listing highlights
 */
export const BuildingStaffCheckInIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    {/* Base ground threshold */}
    <line x1="5" y1="27" x2="27" y2="27" />
    {/* Outer door frame */}
    <path d="M8 27V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v20" />
    {/* Inner door latch line */}
    <line x1="21" y1="6" x2="21" y2="27" />
    {/* Doorknob */}
    <circle cx="17.5" cy="16.5" r="1" fill={color} stroke="none" />
  </svg>
);
