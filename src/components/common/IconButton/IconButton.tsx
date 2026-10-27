import React from 'react';
import clsx from 'clsx';
import styles from './IconButton.module.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'outline' | 'solidWhite' | 'translucentDark';
  size?: 'sm' | 'md' | 'lg';
  'aria-label': string; // Required for accessible icon-only button
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'ghost',
      size = 'md',
      className,
      disabled,
      children,
      type = 'button',
      'aria-label': ariaLabel,
      ...restProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        className={clsx(styles.iconButton, styles[variant], styles[size], className)}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
