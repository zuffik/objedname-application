import { format, formatISO, isToday, isTomorrow } from 'date-fns';
import Link from 'next/link';
import classNames from 'classnames';

interface CalendarDayProps {
  date: Date;
  active?: boolean;
}

export const CalendarDay = ({ date, active }: CalendarDayProps) => {
  /**
   * Human-readable format means: word for today if the day is today,
   * word for tomorrow if the day is tomorrow, day of week otherwise.
   */
  const humanReadable = format(
    date,
    // some translation util could be use here (i18n for example)
    `${isToday(date) ? "'Dnes'" : isTomorrow(date) ? "'Zítra'" : 'EEEE'} d.M.`,
  );
  const dateISO = formatISO(date, { representation: 'date' });
  return (
    <Link
      href={`/calendar/${dateISO}`}
      className={classNames('block px-4 py-2 transition-colors rounded-md', {
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-100':
          !active,
        'bg-amber-500 hover:bg-amber-600 text-gray-700': active,
      })}
    >
      {humanReadable}
    </Link>
  );
};
