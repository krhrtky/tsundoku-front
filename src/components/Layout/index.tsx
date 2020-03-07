import React from 'react';
import { useRouter } from 'next/router';
import { AppHeader } from '@/components/molecules/Header';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const drop: () => void = () => {};

export const Layout: React.FC = props => {
  const router = useRouter();
  const pathName =
    router.pathname === '/' ? 'Home' : router.pathname.replace(/\//, '');
  return (
    <div>
      <AppHeader pathName={pathName} register={drop} />
      {props.children}
    </div>
  );
};
