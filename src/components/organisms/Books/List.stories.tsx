import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from './List';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';

const singleRowData: FetchOutputData = [
  {
    id: '1',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    link: 'https://example.com'
  }
];

const multiRowData: FetchOutputData = [
  {
    id: '1',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    link: 'https://example.com'
  },
  {
    id: '2',
    name: 'sample book',
    status: '購入中',
    type: 'Kindle',
    userId: 'xxxx',
    link: 'https://example.com'
  }
];

storiesOf('Organisms/Books', module)
  .add('empty list', () => <List rows={[]} />)
  .add('single row', () => <List rows={singleRowData} />)
  .add('multi row', () => <List rows={multiRowData} />);
