import React from 'react';
import { storiesOf } from '@storybook/react';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';
import { List } from './List';

const singleRowData: FetchOutputData = [
  {
    id: '1',
    name: 'sample book',
    status: 'Bought',
    type: 'Kindle',
    userId: 'xxxx',
    price: 0,
    link: 'https://example.com'
  }
];

const multiRowData: FetchOutputData = [
  {
    id: '1',
    name: 'sample book',
    status: 'Over',
    type: 'Kindle',
    userId: 'xxxx',
    price: 1000,
    link: 'https://example.com'
  },
  {
    id: '2',
    name: 'sample book',
    status: 'Reading',
    type: 'Kindle',
    userId: 'xxxx',
    price: 99999,
    link: 'https://example.com'
  }
];

storiesOf('Organisms/Books', module)
  .add('empty list', () => <List rows={[]} />)
  .add('single row', () => <List rows={singleRowData} />)
  .add('multi row', () => <List rows={multiRowData} />);
