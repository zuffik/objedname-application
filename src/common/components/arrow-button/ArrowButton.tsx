import Link from 'next/link';
import classNames from 'classnames';
import { Icon } from '@/common/components/icon/Icon';

export type ArrowButtonProps = {
  direction?: 'prev' | 'next';
  disabled?: boolean;
  onClick?: () => void;
};

export const ArrowButton = ({
  direction = 'prev',
  disabled,
  onClick,
}: ArrowButtonProps) => {
  const className = 'block px-4 py-2 rounded-md';
  const icon = <Icon name={direction} />;
  if (disabled) {
    return (
      <span
        className={classNames(
          className,
          'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-700 flex items-center',
        )}
      >
        {icon}
      </span>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'transition-colors bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
      )}
    >
      {icon}
    </button>
  );
};
