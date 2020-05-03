import React from 'react';
import { AppHeader } from '@/components/molecules/Header';
import styled from 'styled-components';
import { useAuth, useUser } from '@/components/hooks';

const MainWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Layout: React.FC = props => {
  const { isLoading, user } = useUser();
  const { signIn, signOut } = useAuth();
  return (
    <div>
      <AppHeader
        isLoading={isLoading}
        user={user}
        signIn={signIn}
        signOut={signOut}
      />
      <MainWrapper>{props.children}</MainWrapper>
    </div>
  );
};
