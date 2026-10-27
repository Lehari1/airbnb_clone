import React from 'react';
import { IconProps } from './types';

export interface HeartIconProps extends IconProps {
  filled?: boolean;
}

export const HeartIcon: React.FC<HeartIconProps> = ({
  size = 16,
  color = 'currentColor',
  filled = false,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={filled ? (color === 'currentColor' ? '#FF385C' : color) : 'none'}
      stroke={filled ? 'none' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16 28C16 28 3 20.5 3 11.5C3 7.5 6 4.5 10 4.5C12.5 4.5 14.7 5.8 16 7.8C17.3 5.8 19.5 4.5 22 4.5C26 4.5 29 7.5 29 11.5C29 20.5 16 28 16 28Z" />
    </svg>
  );
};

export default HeartIcon;
