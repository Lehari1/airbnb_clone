import React from 'react';
import { IconProps } from './types';

export const GlobeIcon: React.FC<IconProps> = ({
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
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="13" />
      <ellipse cx="16" cy="16" rx="6" ry="13" />
      <line x1="3" y1="16" x2="29" y2="16" />
    </svg>
  );
};

export default GlobeIcon;
