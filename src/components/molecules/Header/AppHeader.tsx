import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography as Typo,
  CircularProgress
} from '@/components/atoms/UI';
import { Menu as MenuIcon } from '@/components/atoms/Icon';
import styled from 'styled-components';
import { SideMenu } from '@/components/molecules/Menu/SideMenu';
import { RegisterModal } from '@/components/organisms/Book/RegisterForm';
import { UserMenu } from '@/components/molecules/Menu';
import { User } from '@/model/User';

const Typography = styled(Typo)`
  flex-grow: 1;
`;

type Props = {
  isLoading: boolean;
  user: User | null;
  signIn: () => void;
  signOut: () => void;
};

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const AppHeader: React.FC<Props> = ({
  isLoading,
  user,
  signIn,
  signOut
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
          <div onClick={(): void => setMenuOpen(true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6">Tsundoku</Typography>
          <RegisterModal />
          {isLoading || user == null ? (
            <CircularProgress color="inherit" />
          ) : (
            <UserMenu user={user} signIn={signIn} signOut={signOut} />
          )}
        </Toolbar>
        <div onClick={(): void => setMenuOpen(false)}>
          <SideMenu open={menuOpen} />
        </div>
      </AppBar>
    </Wrapper>
  );
};
