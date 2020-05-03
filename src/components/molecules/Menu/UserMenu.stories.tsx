import React from 'react';
import { storiesOf } from '@storybook/react';
import { User, Id, Name, Email } from '@/model/User';
import { UserMenu } from './UserMenu';

const visitor = User.visitor();
const general = User.general(
  new Id('12341234'),
  new Name('一般ユーザー'),
  new Email('hoge@gmail.com')
);

const signIn = () => console.log('signIn');
const signOut = () => console.log('signIn');

storiesOf('Molecules/Menu', module)
  .add('UserMenu/visitor', () => (
    <UserMenu user={visitor} signIn={signIn} signOut={signOut} />
  ))
  .add('UserMenu/general', () => (
    <UserMenu user={general} signIn={signIn} signOut={signOut} />
  ));
