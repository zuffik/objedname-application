import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDayNavigation } from '@/calendar/components/calendar-day-navigation/CalendarDayNavigation';

const meta = {
  title: 'Calendar/DayNavigation',
  component: CalendarDayNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    currentDate: new Date(),
  },
} satisfies Meta<typeof CalendarDayNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Active: Story = {
  args: {},
};
