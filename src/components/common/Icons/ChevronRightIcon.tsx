import React from 'react';
import { IconProps } from './types';

export const ChevronRightIcon: React.FC<IconProps> = ({
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
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 8l8 8-8 8" />
    </svg>
  );
};

export default ChevronRightIcon;
