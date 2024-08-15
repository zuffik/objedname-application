import { DateTimeCapacity } from '@/calendar/types/DateTimeCapacity';
import { CalendarTime } from '@/calendar/components/calendar-time/CalendarTime';
import { formatISO } from 'date-fns';

export interface CalendarTimeOverviewProps {
  capacities: DateTimeCapacity[];
  date: Date;
}

export const CalendarTimeOverview = ({
  capacities,
  date,
}: CalendarTimeOverviewProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {capacities.map((c) => (
        <CalendarTime
          key={[c.Time, formatISO(date, { representation: 'date' })].join('-')}
          time={c.Time}
          capacity={c.Capacity}
          originalCapacity={c.OriginalCapacity}
        />
      ))}
    </div>
  );
};
