// import type { Meta } from '@storybook/react';
// import Button, { ButtonProps } from './Button';

// const meta: Meta = {
//   title: 'Components/atoms/Button',
//   component: Button
// }

// export default meta;

// type Story = Meta<typeof Button>;

// export const Default: Story = {
//   args: {
//     text: 'Default',
//     variant: 'primary'
//   }
// }

import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default',
    variant: 'primary',
    loading: false,
    disabled: false,
  },
};