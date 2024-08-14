import { DayDefinition } from '@/calendar/types/DayDefinition';
import { addDays, format, isToday, isTomorrow } from 'date-fns';

/**
 * Generates number of days in the future with human-readable and machine format. Human-readable format means: word
 * for today if the day is today, word for tomorrow if the day is tomorrow, week of day otherwise.
 * @param numDays number of days in the future. If non-positive, empty array is returned.
 */
export const generateDaysAheadFromNow = (numDays: number): DayDefinition[] => {
  if (numDays <= 0) return [];
  const today = new Date();
  return Array.from({ length: numDays }).map((_, i) => {
    const date = addDays(today, i);
    return {
      date,
      humanReadable: format(
        date,
        `${isToday(date) ? "'Dnes'" : isTomorrow(date) ? "'Zítra'" : 'EEEE'} dd.mm`,
      ),
    };
  });
};
