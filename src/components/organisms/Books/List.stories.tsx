import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './List';

const singleRowData = [
  {
    id: '1',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    price: 0,
    link: 'https://example.com'
  }
];

const multiRowData = [
  {
    id: '1',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    price: 1000,
    link: 'https://example.com'
  },
  {
    id: '2',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    price: 99999,
    link: ''
  }
];

storiesOf('Organisms/Books', module)
  .add('empty list', () => <List rows={[]} />)
  .add('single row', () => <List rows={singleRowData} />)
  .add('multi row', () => <List rows={multiRowData} />);
