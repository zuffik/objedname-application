import { formatISO } from 'date-fns';

/**
 * Server side redirect to today's calendar view.
 */
export const redirectToToday = () => ({
  redirect: {
    permanent: false,
    destination: `/calendar/${formatISO(Date.now(), { representation: 'date' })}`,
  },
});
