import { NavBar } from '@/navigation/components/nav-bar/NavBar';
import { useRouter } from 'next/router';
import { navBarItems } from '@/navigation/defs/navBarItems';
import { NavBarButton } from '@/navigation/components/nav-bar-button/NavBarButton';

export interface MainNavBarProps {}

export const MainNavBar = ({}: MainNavBarProps) => {
  const { pathname } = useRouter();
  return (
    <NavBar>
      {navBarItems.map((item) => (
        <NavBarButton
          {...item}
          key={item.url}
          active={pathname.startsWith(item.url)}
        />
      ))}
    </NavBar>
  );
};
