import type { Meta, StoryObj } from '@storybook/react';
import { NavBarButton } from '@/navigation/components/nav-bar-button/NavBarButton';

const meta = {
  title: 'Navigation/Button',
  component: NavBarButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: ['user', 'star', 'history', 'calendar'],
    },
  },
  args: {},
} satisfies Meta<typeof NavBarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    icon: 'user',
    url: '/',
  },
};

export const Active: Story = {
  args: {
    label: 'Button',
    icon: 'user',
    url: '/',
    active: true,
  },
};
