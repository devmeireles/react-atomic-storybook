import type { Meta, StoryObj } from '@storybook/react';
import Text, { EFontWeight, ETextVariants, TextProps } from './Text';

const textVariants: ETextVariants[] = ["body", "header1", "header2", "header3", "sub-body"];
const fontWeight: EFontWeight[] = ["bold", "normal", "semi-bold", "tiny"];

const meta: Meta<TextProps> = {
  component: Text,
  argTypes: {
    variant: {
      options: textVariants,
      control: { type: 'inline-radio' },
    },
    fontWeight: {
      options: fontWeight,
      control: { type: 'inline-radio' },
    },
    uppercase: {
      control: 'boolean' 
    }
  }
}

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: 'Hello everybody!',
    variant: 'body'
  }
}

export const Header1: Story = {
  args: {
    children: 'A cool title',
    variant: 'header1',
    fontWeight: 'bold',
    uppercase: true,
  }
}