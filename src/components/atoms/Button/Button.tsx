import React, { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, disabled, loading, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
    >
      {text}
    </button>
  )
}

export default Button;