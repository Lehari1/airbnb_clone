import React from 'react';
import clsx from 'clsx';
import styles from './Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'md',
  className,
}) => {
  const spacingClass =
    spacing === 'none'
      ? styles.spacingNone
      : spacing === 'sm'
        ? styles.spacingSm
        : spacing === 'md'
          ? styles.spacingMd
          : styles.spacingLg;

  return (
    <hr
      className={clsx(styles.divider, styles[orientation], spacingClass, className)}
      aria-hidden="true"
    />
  );
};

export default Divider;
