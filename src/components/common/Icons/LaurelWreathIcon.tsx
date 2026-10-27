import React from 'react';
import { IconProps } from './types';

export interface LaurelWreathIconProps extends IconProps {
  side?: 'left' | 'right';
}

export const LaurelWreathIcon: React.FC<LaurelWreathIconProps> = ({
  size = 48,
  color = 'currentColor',
  side = 'left',
  className,
  ...props
}) => {
  const numSize = typeof size === 'number' ? size : parseFloat(size) || 48;

  return (
    <svg
      width={numSize}
      height={numSize * 1.5}
      viewBox="0 0 40 60"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{
        transform: side === 'right' ? 'scaleX(-1)' : undefined,
      }}
      {...props}
    >
      {/* Authentic curved laurel branch with distinct leaves */}
      {/* Main stem curve */}
      <path
        d="M28 6 C24 16, 16 34, 18 54 C18 56, 17 56, 16 54 C14 34, 22 15, 26 5 C27 4, 29 4, 28 6 Z"
        opacity="0.9"
      />
      {/* Leaf pairs ascending and fanning outward */}
      {/* Bottom leaf pair */}
      <path d="M17 50 C11 48, 8 43, 9 39 C13 40, 16 45, 17 50 Z" />
      <path d="M19 46 C24 45, 27 41, 26 37 C23 38, 20 42, 19 46 Z" />
      {/* Mid-lower leaf pair */}
      <path d="M16 41 C9 39, 6 33, 8 29 C12 30, 15 35, 16 41 Z" />
      <path d="M19 37 C25 35, 28 30, 27 26 C23 27, 20 32, 19 37 Z" />
      {/* Center leaf pair */}
      <path d="M17 31 C10 28, 8 22, 11 18 C14 20, 16 26, 17 31 Z" />
      <path d="M21 27 C27 24, 30 19, 28 15 C25 17, 22 22, 21 27 Z" />
      {/* Upper leaf pair */}
      <path d="M20 21 C14 17, 13 11, 16 7 C19 10, 20 16, 20 21 Z" />
      <path d="M24 17 C30 13, 32 8, 30 4 C27 6, 24 12, 24 17 Z" />
      {/* Top tip leaf */}
      <path d="M27 7 C26 2, 30 0, 31 1 C32 4, 29 7, 27 7 Z" />
    </svg>
  );
};

export default LaurelWreathIcon;
