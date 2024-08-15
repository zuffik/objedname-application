import { NavBarItem } from '@/navigation/types/NavBarItem';
import Link from 'next/link';
import { Icon } from '@/common/components/icon/Icon';
import classNames from 'classnames';

export interface NavBarButtonProps extends NavBarItem {
  active?: boolean;
}

export const NavBarButton = ({
  url,
  icon,
  label,
  active,
}: NavBarButtonProps) => {
  return (
    <Link
      href={url}
      title={label}
      className={classNames('block px-4 py-2 transition-colors rounded-md', {
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-100':
          !active,
        'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-600 dark:text-gray-200':
          active,
      })}
    >
      <Icon name={icon} />
    </Link>
  );
};
