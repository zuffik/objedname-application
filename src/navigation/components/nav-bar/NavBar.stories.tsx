import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { NavBar } from '@/navigation/components/nav-bar/NavBar';
import { NavBarButton } from '@/navigation/components/nav-bar-button/NavBarButton';

const meta = {
  title: 'Navigation/Bar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NavBar {...args}>
      <NavBarButton url="/" label="Item" icon="user" />
      <NavBarButton url="/" label="Item" icon="star" />
      <NavBarButton url="/" label="Item" icon="history" />
      <NavBarButton url="/" label="Item" icon="calendar" active />
    </NavBar>
  ),
};
