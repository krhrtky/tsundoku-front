import React from 'react';
import { useRouter } from 'next/router';
import { AppHeader } from '@/molecules/Header';

export const Layout: React.FC = props => {
  const router = useRouter();
  const pathname =
    router.pathname === '/' ? 'Home' : router.pathname.replace(/\//, '');
  return (
    <div>
      <AppHeader pathName={pathname} />
      {props.children}
    </div>
  );
};
