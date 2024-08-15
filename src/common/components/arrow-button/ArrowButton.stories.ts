import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from '@/common/components/arrow-button/ArrowButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Common/ArrowButton',
  component: ArrowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: ['prev', 'next'],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'prev',
  },
};

export const Disabled: Story = {
  args: {
    direction: 'prev',
    disabled: true,
  },
};
