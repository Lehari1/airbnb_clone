import React from 'react';
import { IconProps } from './types';

export interface LaurelWreathIconProps extends IconProps {
  side?: 'left' | 'right';
}

export const LaurelWreathIcon: React.FC<LaurelWreathIconProps> = ({
  size = 32,
  color = 'currentColor',
  side = 'left',
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 48"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{
        transform: side === 'right' ? 'scaleX(-1)' : undefined,
      }}
      {...props}
    >
      <path d="M12 4c.6 3-1 6-3 8.5 2 .2 4.5-.5 6-2-1.5 3.5-4.5 5.5-8 6.5 2.2.8 4.8.5 6.5-.8-1.8 3.5-5 5.2-8.5 6 2.5 1 5 .8 7-.5-2 3.5-5.5 5-9 5.5 2.5 1.2 5 1.2 7.2 0-2 3.2-5.5 4.5-9.2 4.8 2.2 1.5 4.8 1.5 7 .5-2 2.8-5.2 4-8.8 4 1.8 1.5 4.2 1.5 6.2.8-1.8 2.2-4.5 3.2-7.5 3.2 1.2 1.2 2.8 1.4 4.2 1-3.2 2-7.5 2.2-11.2 1.2C3 40 7 28 10 16 11 11 11.5 7 12 4z" />
    </svg>
  );
};

export default LaurelWreathIcon;
