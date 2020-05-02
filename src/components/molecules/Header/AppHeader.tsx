import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'firebase';
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
import { Id, User, Email, Name } from '@/model/User';
import { fromNullable, getOrElse, map } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

const Typography = styled(Typo)`
  flex-grow: 1;
`;

type Props = {
  pathName: string;
};

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const AppHeader: React.FC<Props> = ({ pathName }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const signIn = () => router.push('/users/signIn');

  const signOut = () =>
    auth()
      .signOut()
      .then(() => router.push('/'))
      .catch(error => console.error(error));

  useEffect(() => {
    auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);

        const displayName = pipe(
          firebaseUser.providerData.find(provider => provider != null),
          fromNullable,
          map(provider => provider.displayName),
          getOrElse(() => firebaseUser.displayName),
          fromNullable,
          getOrElse(() => '')
        );

        const newUser = firebaseUser.isAnonymous
          ? User.visitor(firebaseUser.uid)
          : User.general(
              new Id(firebaseUser.uid),
              new Name(displayName),
              new Email('')
            );
        setUser(newUser);
      } else {
        auth()
          .signInAnonymously()
          .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
              alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
              console.error(error);
            }
          });
      }
    });
  }, []);

  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
          <div onClick={(): void => setMenuOpen(true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6">{pathName}</Typography>
          <RegisterModal />
          {user == null ? (
            <CircularProgress />
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
