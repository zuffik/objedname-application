import { DateTimeCapacity } from '@/calendar/types/DateTimeCapacity';
import { CalendarTime } from '@/calendar/components/calendar-time/CalendarTime';
import { formatISO, isSameDay } from 'date-fns';
import { useState } from 'react';
import { ca } from 'date-fns/locale';
import { Alert } from '@/common/components/alert/Alert';

export interface CalendarTimeOverviewProps {
  capacities: DateTimeCapacity[];
  date: Date;
}

export const CalendarTimeOverview = ({
  capacities,
  date,
}: CalendarTimeOverviewProps) => {
  const [activeTime, setActiveTime] = useState<
    undefined | { time: string; date: Date }
  >();
  // I guess here will be something that handles the selected day, otherwise I don't know what else to do with this

  if (capacities.length === 0) {
    return <Alert variant="info" message="No capacities found" />;
  }
  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {capacities.map((c) => (
        <CalendarTime
          key={[c.Time, formatISO(date, { representation: 'date' })].join('-')}
          onClick={() =>
            setActiveTime({
              date,
              time: c.Time,
            })
          }
          time={c.Time}
          capacity={c.Capacity}
          originalCapacity={c.OriginalCapacity}
          disabled={c.Capacity <= 0}
          active={
            activeTime &&
            activeTime.time === c.Time &&
            isSameDay(date, activeTime.date)
          }
        />
      ))}
    </div>
  );
};
