import type { Meta, StoryObj } from '@storybook/react';
import { CalendarTimeOverview } from '@/calendar/components/calendar-time-overview/CalendarTimeOverview';

const meta = {
  title: 'Calendar/TimeOverview',
  component: CalendarTimeOverview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    date: new Date(),
    capacities: [
      {
        Time: '00:00',
        Capacity: 1,
        OriginalCapacity: 2,
      },
      {
        Time: '01:00',
        Capacity: 1,
        OriginalCapacity: 2,
      },
      {
        Time: '02:00',
        Capacity: 1,
        OriginalCapacity: 2,
      },
      {
        Time: '03:00',
        Capacity: 1,
        OriginalCapacity: 2,
      },
      {
        Time: '04:00',
        Capacity: 1,
        OriginalCapacity: 2,
      },
    ],
  },
} satisfies Meta<typeof CalendarTimeOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
