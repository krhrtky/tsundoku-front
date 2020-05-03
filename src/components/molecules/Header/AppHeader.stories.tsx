import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppHeader } from './AppHeader';
import { Id, Email, Name, User } from '@/model/User';

const loading = {
  isLoading: true,
  user: null,
  signIn: () => console.log('signIn'),
  signOut: () => console.log('signOut')
};

const visitor = {
  isLoading: false,
  user: User.visitor(),
  signIn: () => console.log('signIn'),
  signOut: () => console.log('signOut')
};

const general = {
  isLoading: false,
  user: User.general(
    new Id(''),
    new Name('テストユーザー'),
    new Email('test@gmail.com')
  ),
  signIn: () => console.log('signIn'),
  signOut: () => console.log('signOut')
};

storiesOf('Molecules/Header', module)
  .add('AppHeader/loading', () => <AppHeader {...loading} />)
  .add('AppHeader/visitor', () => <AppHeader {...visitor} />)
  .add('AppHeader/general', () => <AppHeader {...general} />);
