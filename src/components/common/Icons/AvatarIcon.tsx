import React from 'react';
import { IconProps } from './types';

export const AvatarIcon: React.FC<IconProps> = ({
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
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 18c-6.075 0-11 3.582-11 8v2h22v-2c0-4.418-4.925-8-11-8z" />
    </svg>
  );
};

export default AvatarIcon;
