"use client";
import React from "react";
import styles from "../styles/Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className={styles.btn} {...props}>
    {children}
  </button>
);

export default Button;
