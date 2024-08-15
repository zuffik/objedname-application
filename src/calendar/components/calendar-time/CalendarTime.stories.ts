import type { Meta, StoryObj } from '@storybook/react';
import { CalendarTime } from '@/calendar/components/calendar-time/CalendarTime';

const meta = {
  title: 'Calendar/Time',
  component: CalendarTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    time: '00:00',
    capacity: 1,
    originalCapacity: 3,
  },
} satisfies Meta<typeof CalendarTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
