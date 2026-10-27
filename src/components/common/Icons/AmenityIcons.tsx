import React from 'react';
import { IconProps } from './types';

export const KitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 8h24v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="22" cy="12" r="2" />
    <line x1="16" y1="20" x2="16" y2="24" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M3 11a18.3 18.3 0 0 1 26 0" />
    <path d="M7 16a12.7 12.7 0 0 1 18 0" />
    <path d="M11 21a7.1 7.1 0 0 1 10 0" />
    <circle cx="16" cy="26" r="1.5" fill={color} />
  </svg>
);

export const PoolIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M2 24c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2" />
    <path d="M2 28c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2" />
    <circle cx="10" cy="8" r="3" />
    <path d="M8 14h6l4 4" />
    <path d="M12 14l-2 5" />
  </svg>
);

export const HotTubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 16h24v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-8z" />
    <path d="M8 6c1 2-1 4 0 6" />
    <path d="M16 4c1 3-1 5 0 8" />
    <path d="M24 6c1 2-1 4 0 6" />
  </svg>
);

export const WorkspaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="5" y="6" width="22" height="15" rx="2" />
    <line x1="2" y1="26" x2="30" y2="26" />
    <line x1="12" y1="21" x2="8" y2="26" />
    <line x1="20" y1="21" x2="24" y2="26" />
  </svg>
);

export const ParkingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="4" y="4" width="24" height="24" rx="6" />
    <path d="M12 22V10h6a4 4 0 0 1 0 8h-6" />
  </svg>
);

export const PetsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="8" cy="11" r="2.5" />
    <circle cx="14" cy="7" r="2.5" />
    <circle cx="20" cy="7" r="2.5" />
    <circle cx="26" cy="11" r="2.5" />
    <path d="M17 14c-4 0-7 2.5-7 6.5 0 3 2.5 5.5 7 5.5s7-2.5 7-5.5c0-4-3-6.5-7-6.5z" />
  </svg>
);

export const SecurityCameraIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M6 10l16-4v12L6 14z" />
    <rect x="2" y="10" width="4" height="8" rx="1" />
    <line x1="14" y1="12" x2="14" y2="22" />
    <path d="M10 26h8" />
  </svg>
);

export const SmokeAlarmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="5" />
    <line x1="16" y1="4" x2="16" y2="8" />
    <line x1="16" y1="24" x2="16" y2="28" />
  </svg>
);

export const CarbonMonoxideAlarmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="4" y="6" width="24" height="20" rx="4" />
    <line x1="10" y1="16" x2="16" y2="16" />
    <circle cx="22" cy="16" r="3" />
  </svg>
);

export const TvIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="3" y="7" width="26" height="18" rx="3" />
    <line x1="11" y1="29" x2="21" y2="29" />
    <line x1="16" y1="25" x2="16" y2="29" />
  </svg>
);

export const AcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="3" y="6" width="26" height="12" rx="2" />
    <line x1="7" y1="14" x2="25" y2="14" />
    <path d="M8 22l-2 4" />
    <path d="M16 22v4" />
    <path d="M24 22l2 4" />
  </svg>
);

export const BalconyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <line x1="4" y1="18" x2="28" y2="18" />
    <line x1="4" y1="28" x2="28" y2="28" />
    <line x1="8" y1="18" x2="8" y2="28" />
    <line x1="16" y1="18" x2="16" y2="28" />
    <line x1="24" y1="18" x2="24" y2="28" />
    <path d="M6 18V6h20v12" />
  </svg>
);

export const ElevatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="4" y="4" width="24" height="24" rx="3" />
    <path d="M12 14l4-4 4 4" />
    <path d="M12 18l4 4 4-4" />
  </svg>
);

export const WasherIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="5" y="4" width="22" height="24" rx="3" />
    <circle cx="16" cy="17" r="6" />
    <circle cx="10" cy="8" r="1.5" />
    <circle cx="14" cy="8" r="1.5" />
  </svg>
);
