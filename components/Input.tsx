'use client';

import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

function InputBase(
  { className, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className ?? ''}`}
      {...rest}
    />
  );
}

export const Input = forwardRef(InputBase);