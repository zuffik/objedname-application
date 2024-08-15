import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDay } from '@/calendar/components/calendar-day/CalendarDay';

const meta = {
  title: 'Calendar/Day',
  component: CalendarDay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CalendarDay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(),
  },
};
export const Active: Story = {
  args: {
    date: new Date(),
    active: true,
  },
};
