import { GetServerSideProps } from 'next';
import { redirectToToday } from '@/calendar/utils/redirectToToday';

export const getServerSideProps: GetServerSideProps = async () => {
  return redirectToToday();
};

export default function CalendarRootPage() {
  return null;
}
