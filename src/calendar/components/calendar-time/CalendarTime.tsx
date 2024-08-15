import classNames from 'classnames';

export interface CalendarTimeProps {
  time: string;
  capacity: number;
  originalCapacity: number;
  eco?: boolean;
}

export const CalendarTime = ({
  time,
  capacity,
  originalCapacity,
  eco,
}: CalendarTimeProps) => {
  const usedCapacity = originalCapacity - capacity;
  return (
    <div
      className={classNames(
        'relative rounded-md text-center py-4 px-10 border-[1px]',
        {
          'border-gray-600 dark:border-gray-200 text-gray-600 dark:text-gray-200':
            !eco,
          'border-lime-500 text-gray-50 bg-lime-500': eco,
        },
      )}
    >
      <span className="absolute left-1.5 top-1.5 text-xs">{`(${usedCapacity}/${originalCapacity})`}</span>
      {time}
    </div>
  );
};
