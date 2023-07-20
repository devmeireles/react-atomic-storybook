import React, { HTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './Button.styles';

export type EButtonVariants =
  "primary" |
  "secondary" |
  "danger" |
  "warning";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: EButtonVariants;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, disabled, loading, children, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button;