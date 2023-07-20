import React, { HTMLAttributes } from 'react';
import StyledText from './Text.style';

export type ETextVariants =
  "header1" |
  "header2" |
  "header3" |
  "body" |
  "sub-body";

export type EFontWeight =
  "tiny" |
  "normal" |
  "semi-bold" |
  "bold";

export interface TextProps extends HTMLAttributes<HTMLInputElement> {
  variant: ETextVariants;
  uppercase?: boolean;
  fontWeight?: EFontWeight;
}

const Text: React.FC<TextProps> = ({ variant = "body", fontWeight = "normal", uppercase, children, ...props }) => {
  return (
    <StyledText
      variant={variant}
      uppercase={uppercase}
      fontWeight={fontWeight}
      {...props}
    >{children}</StyledText>
  )
}

export default Text