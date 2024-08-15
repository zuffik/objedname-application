import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from '@/common/components/arrow-button/ArrowButton';

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
    disabled: {
      type: 'boolean',
      control: {
        disable: true,
      },
    },
  },
  args: {},
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'prev',
    href: '/',
  },
};

export const Disabled: Story = {
  args: {
    direction: 'prev',
    disabled: true,
  },
};
