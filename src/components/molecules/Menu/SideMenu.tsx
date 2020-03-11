import React from 'react';
import { Drawer, List, ListItem } from '@/components/atoms/UI';
import { Home } from '@/components/atoms/Icon';
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
      <Link href="/books">
        <ListItem
          style={{ width: 200, textDecoration: 'none', cursor: 'pointer' }}
        >
          <Home />
          Books
        </ListItem>
      </Link>
    </List>
  </Drawer>
);
