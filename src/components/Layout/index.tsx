import React from 'react';
import { useRouter } from 'next/router';
import { AppHeader } from '@/components/molecules/Header';
import styled from 'styled-components';

const MainWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Layout: React.FC = props => {
  const router = useRouter();
  const pathName =
    router.pathname === '/' ? 'Home' : router.pathname.replace(/\//, '');
  return (
    <div>
      <AppHeader pathName={pathName} />
      <MainWrapper>{props.children}</MainWrapper>
    </div>
  );
};
