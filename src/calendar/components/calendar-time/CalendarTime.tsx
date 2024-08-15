import classNames from 'classnames';

export interface CalendarTimeProps {
  time: string;
  capacity: number;
  originalCapacity: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const CalendarTime = ({
  time,
  capacity,
  originalCapacity,
  active,
  onClick,
  disabled,
}: CalendarTimeProps) => {
  const usedCapacity = originalCapacity - capacity;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        'relative rounded-md text-center py-4 px-10 border-[1px]',
        {
          'border-gray-600 dark:border-gray-200 text-gray-600 dark:text-gray-200':
            !active,
          'border-lime-500 text-gray-50 bg-lime-500': active,
          'opacity-30': disabled,
        },
      )}
    >
      <span className="absolute left-1.5 top-1.5 text-xs">{`(${usedCapacity}/${originalCapacity})`}</span>
      {time}
    </button>
  );
};
