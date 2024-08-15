import { DateTimeCapacity } from '@/calendar/types/DateTimeCapacity';
import Head from 'next/head';
import { MainNavBar } from '@/navigation/components/main-nav-bar/MainNavBar';
import { CalendarDayNavigation } from '@/calendar/components/calendar-day-navigation/CalendarDayNavigation';
import { useMemo } from 'react';
import { parseISO } from 'date-fns';
import { CalendarTimeOverview } from '@/calendar/components/calendar-time-overview/CalendarTimeOverview';

export interface CalendarDatePageProps {
  capacities: DateTimeCapacity[];
  date: string;
}

export const CalendarDatePage = ({
  date: isoDate,
  capacities,
}: CalendarDatePageProps) => {
  const date = useMemo(() => parseISO(isoDate), [isoDate]);
  return (
    <>
      <Head>
        <title>Date pick {isoDate}</title>
      </Head>
      <div className="p-5 flex flex-col gap-y-4 m-auto max-w-2xl">
        <MainNavBar />
        <CalendarDayNavigation currentDate={date} />
        <CalendarTimeOverview capacities={capacities} date={date} />
      </div>
    </>
  );
};
