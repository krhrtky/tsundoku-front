import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  FetchOutputData,
  FetchOutputDataItem
} from '@/usecase/book/Fetch/FetchOutputData';
import { List } from './List';

const date = new Date();

const singleRowData: FetchOutputData = [
  {
    id: '1',
    name: 'sample book',
    status: 'Bought',
    type: 'Kindle',
    userId: 'xxxx',
    price: 0,
    totalPages: 100,
    link: 'https://example.com',
    createdAt: date,
    updatedAt: date
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
    totalPages: 200,
    link: 'https://example.com',
    createdAt: date,
    updatedAt: date
  },
  {
    id: '2',
    name: 'sample book',
    status: 'Reading',
    type: 'Kindle',
    userId: 'xxxx',
    price: 99999,
    totalPages: 55555,
    link: 'https://example.com',
    createdAt: date,
    updatedAt: date
  }
];

const onEdit = (book: FetchOutputDataItem) => console.log(`onEdit: ${book}`);
const onDelete = (book: FetchOutputDataItem) => () =>
  console.log(`onDelete: ${book}`);

storiesOf('Organisms/Books', module)
  .add('empty list', () => (
    <List books={[]} onEdit={onEdit} onDelete={onDelete} />
  ))
  .add('single row', () => (
    <List books={singleRowData} onEdit={onEdit} onDelete={onDelete} />
  ))
  .add('multi row', () => (
    <List books={multiRowData} onEdit={onEdit} onDelete={onDelete} />
  ));
