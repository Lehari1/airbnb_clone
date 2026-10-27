import React from 'react';
import { IconProps } from './types';

export const ShareIcon: React.FC<IconProps> = ({
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
      <path d="M22 12l-6-6-6 6" />
      <line x1="16" y1="6" x2="16" y2="22" />
      <path d="M6 16v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16" />
    </svg>
  );
};

export default ShareIcon;
