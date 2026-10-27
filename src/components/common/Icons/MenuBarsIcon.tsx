import React from 'react';
import { IconProps } from './types';

export const MenuBarsIcon: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <line x1="4" y1="8" x2="28" y2="8" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <line x1="4" y1="24" x2="28" y2="24" />
    </svg>
  );
};

export default MenuBarsIcon;
