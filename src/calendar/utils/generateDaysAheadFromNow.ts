import { addDays } from 'date-fns';

/**
 * Generates number of days in the future.
 * @param numDays number of days in the future. If non-positive, empty array is returned.
 */
export const generateDaysAheadFromNow = (numDays: number): Date[] => {
  if (numDays <= 0) return [];
  const today = new Date();
  return Array.from({ length: numDays }).map((_, i) => addDays(today, i));
};
