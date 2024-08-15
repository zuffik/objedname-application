import { GetServerSideProps } from 'next';
import { formatISO, isPast, isToday, isValid, parseISO } from 'date-fns';
import { redirectToToday } from '@/calendar/utils/redirectToToday';
import { httpClient } from '@/http/defs/httpClient';
import { DateTimeCapacityHttpResponse } from '@/calendar/types/DateTimeCapacityHttpResponse';
import {
  CalendarDatePage,
  CalendarDatePageProps,
} from '@/calendar/components/calendar-date-page/CalendarDatePage';

export const getServerSideProps: GetServerSideProps<
  CalendarDatePageProps
> = async ({ params }) => {
  const date = parseISO(
    // number of characters in ISO
    params?.date?.toString().slice(10) ?? formatISO(Date.now()),
  );
  /**
   * If it's in the past or today (because past can be in today) or invalid, we redirect to valid date (today).
   */
  if (!isValid(date) && isPast(date) && !isToday(date)) {
    return redirectToToday();
  }
  try {
    const data = await httpClient.get<DateTimeCapacityHttpResponse>('/day');
    return {
      props: {
        capacities: data.data.Data,
      },
    };
  } catch {
    // or whatever to handle error (maybe redirect to 500 or 404 based on the response)...
    return {
      notFound: true,
    };
  }
};

export default CalendarDatePage;
