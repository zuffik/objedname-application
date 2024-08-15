import { useCallback, useMemo, useState } from 'react';
import { ArrowButton } from '@/common/components/arrow-button/ArrowButton';
import { addDays, formatISO, isSameDay, isToday, subDays } from 'date-fns';
import { CalendarDay } from '@/calendar/components/calendar-day/CalendarDay';

export interface CalendarDayNavigationProps {
  currentDate: Date;
}

const daysVisible = 2;
// again, there could be somehow resolved the case when user opens app at midnight
const dateOrigin = new Date();

export const CalendarDayNavigation = ({
  currentDate,
}: CalendarDayNavigationProps) => {
  const [paginatedDate, setPaginatedDate] = useState(dateOrigin);
  const days = useMemo(
    () =>
      Array.from({ length: daysVisible }).map((_, i) =>
        addDays(paginatedDate, i),
      ),
    [paginatedDate],
  );
  console.log(days);
  const prevDisabled = isSameDay(dateOrigin, paginatedDate);
  const handlePrevClick = useCallback(
    () =>
      setPaginatedDate((date) =>
        isSameDay(date, dateOrigin) ? date : subDays(date, daysVisible),
      ),
    [],
  );
  const handleNextClick = useCallback(
    () => setPaginatedDate((date) => addDays(date, daysVisible)),
    [],
  );
  return (
    <nav className="flex flex-row items-stretch gap-x-1 w-full flex-1">
      <ArrowButton
        direction="prev"
        disabled={prevDisabled}
        onClick={handlePrevClick}
      />
      {days.map((day) => (
        <CalendarDay
          date={day}
          active={isSameDay(day, currentDate)}
          key={day.toISOString()}
        />
      ))}
      <ArrowButton direction="next" onClick={handleNextClick} />
    </nav>
  );
};
