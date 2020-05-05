import React from 'react';
import { storiesOf } from '@storybook/react';
import { BookList } from './BookList';
import {
  FetchOutputData,
  FetchOutputDataItem
} from '@/usecase/book/Fetch/FetchOutputData';

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

storiesOf('Templates/BookList', module)
  .add('empty list', () => (
    <BookList books={[]} onEdit={onEdit} onDelete={onDelete} />
  ))
  .add('single row', () => (
    <BookList books={singleRowData} onEdit={onEdit} onDelete={onDelete} />
  ))
  .add('multi row', () => (
    <BookList books={multiRowData} onEdit={onEdit} onDelete={onDelete} />
  ));
