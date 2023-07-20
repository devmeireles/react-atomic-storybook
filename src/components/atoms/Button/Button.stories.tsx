import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps, EButtonVariants } from './Button';

const buttonVariants: EButtonVariants[] = ["danger", "primary", "secondary", "warning"];

const meta: Meta<ButtonProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'inline-radio' },
    },
    onClick: {
      control: false,
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'primary',
    loading: false,
    disabled: false,
    onClick: action('clicked'),
  },
};