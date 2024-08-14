import { NavBarItem } from '@/navigation/types/NavBarItem';
import Link from 'next/link';
import { Icon } from '@/common/components/icon/Icon';

export interface NavBarButtonProps extends NavBarItem {
  active?: boolean;
}

export const NavBarButton = ({ url, icon, label }: NavBarButtonProps) => {
  return (
    <Link
      href={url}
      title={label}
      className="block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 transition-colors rounded-md text-gray-700 dark:text-gray-100"
    >
      <Icon name={icon} />
    </Link>
  );
};
