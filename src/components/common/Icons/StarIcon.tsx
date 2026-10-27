import React from 'react';
import { IconProps } from './types';

export const StarIcon: React.FC<IconProps> = ({
  size = 14,
  color = 'currentColor',
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M15.094 1.579l-4.124 8.88-9.78 1.187a1.002 1.002 0 0 0-.563 1.734l7.228 6.647-1.921 9.664a1 1 0 0 0 1.474 1.071L16 26.046l8.592 4.716a1 1 0 0 0 1.474-1.071l-1.921-9.664 7.228-6.647a1.002 1.002 0 0 0-.563-1.734l-9.78-1.187-4.124-8.88a1 1 0 0 0-1.812 0z" />
    </svg>
  );
};

export default StarIcon;
