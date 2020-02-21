import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton as IB,
  Typography as Typo
} from '@/atoms/UI';
import { Menu as MenuIcon } from '@/atoms/Icon';
import styled from 'styled-components';
import { SideMenu } from '@/molecules/Menu/SideMenu';

const IconButton = styled(IB)`
  flexgrow: 1;
`;

const Typography = styled(Typo)`
  marginright: theme.spacing(2);
`;

type Props = {
  pathName: string;
};

export const AppHeader: React.FC<Props> = ({ pathName }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div onClick={(): void => setMenuOpen(true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6">{pathName}</Typography>
        </Toolbar>
        <div onClick={(): void => setMenuOpen(false)}>
          <SideMenu open={menuOpen} />
        </div>
      </AppBar>
    </>
  );
};
