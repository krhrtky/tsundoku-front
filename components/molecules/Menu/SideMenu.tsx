import React from 'react';
import { Drawer, List, ListItem } from '@/atoms/UI';
import { Home } from '@/atoms/Icon';
import Link from 'next/link';

type Props = {
  open: boolean;
};

export const SideMenu: React.FC<Props> = ({ open }) => (
  <Drawer anchor="left" open={open}>
    <List>
      <Link href="/">
        <ListItem
          style={{ width: 200, textDecoration: 'none', cursor: 'pointer' }}
        >
          <Home />
          Home
        </ListItem>
      </Link>
    </List>
  </Drawer>
);
