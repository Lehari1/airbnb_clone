import React from 'react';
import { IconProps } from './types';

export const SearchIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="14" cy="14" r="9" />
      <line x1="21" y1="21" x2="28" y2="28" />
    </svg>
  );
};

export default SearchIcon;
