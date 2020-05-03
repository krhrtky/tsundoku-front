import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@/components/atoms/UI';
import { User } from '@/model/User';

type Props = {
  user: User;
  signIn: () => void;
  signOut: () => void;
};

export const UserMenu: React.FC<Props> = ({ user, signIn, signOut }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography color="inherit">{user.name.value}</Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl !== null}
        onClose={handleClose}
      >
        {user.isVisitor() ? (
          <MenuItem
            onClick={() => {
              signIn();
              handleClose();
            }}
          >
            SignIn
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              signOut();
              handleClose();
            }}
          >
            SignOut
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};
