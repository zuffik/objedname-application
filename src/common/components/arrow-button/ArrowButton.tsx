import Link from 'next/link';
import classNames from 'classnames';
import { Icon } from '@/common/components/icon/Icon';

export type ArrowButtonProps = {
  direction?: 'prev' | 'next';
} & (
  | {
      disabled: true;
    }
  | {
      href: string;
    }
);

export const ArrowButton = ({
  direction = 'prev',
  ...props
}: ArrowButtonProps) => {
  const className = 'block px-4 py-2 rounded-md';
  const icon = <Icon name={direction} />;
  if ('disabled' in props && props.disabled) {
    return (
      <span
        className={classNames(
          className,
          'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-700',
        )}
      >
        {icon}
      </span>
    );
  }
  if ('href' in props) {
    return (
      <Link
        href={props.href}
        className={classNames(
          className,
          'transition-colors bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
        )}
      >
        {icon}
      </Link>
    );
  }
  // could be resolved using `is...` function
  console.error('Unreachable code');
  return null;
};
