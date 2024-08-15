import { ReactNode } from 'react';

export interface NavBarProps {
  children?: ReactNode;
}

export const NavBar = ({ children }: NavBarProps) => {
  return (
    <nav className="flex flex-row items-center gap-x-2 w-full">{children}</nav>
  );
};
