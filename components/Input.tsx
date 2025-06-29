"use client";
import React from "react";
import styles from "../styles/Input.module.scss";

interface InputProps {
  label: string;
  error?: string;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} {...props} />
    {error && <p className={styles.error}>{error}</p>}
  </div>
);

export default Input;
