import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { range } from 'ramda';
import { Confirm } from '@/components/organisms/Modal/Confirm';

const modal = {
  isOpen: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  open: () => {},
  close: () => action('close')
};

const onSubmit = async () => {
  action('onSubmit');
};

const singleMessage = ['テストメッセージ'];
const multiMessage = range(0, 3).map(_ => 'テストメッセージ');

storiesOf('Organisms/Modal', module)
  .add('confirmModal/singleMessage', () => (
    <Confirm modal={modal} messages={singleMessage} onSubmit={onSubmit} />
  ))
  .add('confirmModal/multiMessage', () => (
    <Confirm modal={modal} messages={multiMessage} onSubmit={onSubmit} />
  ));
