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
    // Although in old application capacity hours are filtered on frontend,
    // unless there's a reason behind it, I would do it in backend.
    // Also, this randomly returns empty array.
    Data:
      Math.random() < 0.2
        ? []
        : Array.from({ length: 8 }).map((_, i) => {
            const capacity = faker.number.int({ min: 0, max: 3 });
            return {
              Time: `${i + 12}:00`,
              Capacity: capacity,
              OriginalCapacity: faker.number.int({ min: capacity, max: 4 }),
            };
          }),
  });
}
