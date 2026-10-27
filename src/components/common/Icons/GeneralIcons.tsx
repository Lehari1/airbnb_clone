import React from 'react';
import { IconProps } from './types';

export const KeyboardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
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
    <rect x="3" y="7" width="26" height="18" rx="3" />
    <line x1="7" y1="12" x2="9" y2="12" />
    <line x1="12" y1="12" x2="14" y2="12" />
    <line x1="17" y1="12" x2="19" y2="12" />
    <line x1="22" y1="12" x2="25" y2="12" />
    <line x1="7" y1="16" x2="9" y2="16" />
    <line x1="12" y1="16" x2="14" y2="16" />
    <line x1="17" y1="16" x2="19" y2="16" />
    <line x1="22" y1="16" x2="25" y2="16" />
    <line x1="10" y1="20" x2="22" y2="20" />
  </svg>
);

export const FlagIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', className, ...props }) => (
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
    <path d="M6 3v26" />
    <path d="M6 4h18l-3 7 3 7H6" />
  </svg>
);
