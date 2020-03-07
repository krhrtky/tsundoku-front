import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography as Typo
} from '@/components/atoms/UI';
import { Menu as MenuIcon } from '@/components/atoms/Icon';
import styled from 'styled-components';
import { SideMenu } from '@/components/molecules/Menu/SideMenu';
import { RegisterModal } from '@/components/organisms/Book/RegisterModal';

const Typography = styled(Typo)`
  flex-grow: 1;
`;

type Props = {
  pathName: string;
  register: () => void;
};

export const AppHeader: React.FC<Props> = ({ pathName, register }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div onClick={(): void => setMenuOpen(true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6">{pathName}</Typography>
          <div onClick={register}>
            <RegisterModal />
          </div>
        </Toolbar>
        <div onClick={(): void => setMenuOpen(false)}>
          <SideMenu open={menuOpen} />
        </div>
      </AppBar>
    </div>
  );
};
