import React from 'react';
import { IconProps } from './types';

export const CloseIcon: React.FC<IconProps> = ({
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
      <line x1="7" y1="7" x2="25" y2="25" />
      <line x1="25" y1="7" x2="7" y2="25" />
    </svg>
  );
};

export default CloseIcon;
