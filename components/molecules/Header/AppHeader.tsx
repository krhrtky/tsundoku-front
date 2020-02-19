import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton as IB,
  Typography as Typo
} from '@/atoms/UI';
import { Menu as MenuIcon } from '@/atoms/Icon';
import styled from 'styled-components';

const IconButton = styled(IB)`
  flexgrow: 1;
`;

const Typography = styled(Typo)`
  marginright: theme.spacing(2);
`;

type Props = {
  pathName: string;
};

export const AppHeader: React.FC<Props> = ({ pathName }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">{pathName}</Typography>
    </Toolbar>
  </AppBar>
);
