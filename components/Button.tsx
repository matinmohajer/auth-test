'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import faData from "@/lib/fa.json"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export const Button = ({ children, loading, ...rest }: Props) => (
  <button {...rest} className={styles.btn} disabled={loading || rest.disabled}>
    {loading ? faData.Loading : children}
  </button>
);