import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from '@/common/components/arrow-button/ArrowButton';
import { fn } from '@storybook/test';
import { Alert } from '@/common/components/alert/Alert';

const meta = {
  title: 'Common/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: ['info'],
    },
  },
  args: {
    variant: 'info',
    message: 'This is alert',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
