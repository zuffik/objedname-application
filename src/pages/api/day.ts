import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { DateTimeCapacityHttpResponse } from '@/calendar/types/DateTimeCapacityHttpResponse';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DateTimeCapacityHttpResponse>,
) {
  res.status(200).json({
    Status: 'OK',
    Message: 'OK',
    Data: Array.from({ length: 24 }).map((_, i) => {
      const capacity = faker.number.int({ min: 0, max: 3 });
      return {
        Time: `${i.toString().padStart(2, '0')}:00`,
        Capacity: capacity,
        OriginalCapacity: faker.number.int({ min: capacity, max: 4 }),
      };
    }),
  });
}
