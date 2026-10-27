import React from 'react';
import { IconProps } from './types';

export const CleanlinessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M14 6h4v4h-4z" />
    <path d="M16 10v6" />
    <path d="M12 16h8l2 12H10l2-12z" />
    <path d="M18 8l4-2" />
    <circle cx="24" cy="14" r="1" fill={color} />
    <circle cx="26" cy="18" r="1.5" fill={color} />
  </svg>
);

export const AccuracyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="16" cy="16" r="12" />
    <path d="M10 16l4 4 8-8" />
  </svg>
);

export const CheckInIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="21" cy="11" r="5" />
    <path d="M17 15l-11 11v4h4l3-3v-3h3l2-2" />
  </svg>
);

export const CommunicationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M5 22h18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v18l-4 4v-4a3 3 0 0 1 3-3z" />
    <circle cx="11" cy="13" r="1" fill={color} />
    <circle cx="16" cy="13" r="1" fill={color} />
    <circle cx="21" cy="13" r="1" fill={color} />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 8l8-4 8 4 8-4v20l-8 4-8-4-8 4V8z" />
    <path d="M12 4v20" />
    <path d="M20 8v20" />
  </svg>
);

export const ValueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 17l11-11h11v11L15 28 4 17z" />
    <circle cx="21" cy="11" r="2" fill={color} />
  </svg>
);
