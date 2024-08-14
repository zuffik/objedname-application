import { DateTimeCapacity } from '@/calendar/types/DateTimeCapacity';

export interface CalendarDatePageProps {
  capacities: DateTimeCapacity[];
}

export const CalendarDatePage = ({}: CalendarDatePageProps) => {
  return <div className="p-5 flex flex-col gap-y-4"></div>;
};
