import React from 'react';
import { storiesOf } from '@storybook/react';
import { BookList } from './BookList';
import {
  FetchOutputData,
  FetchOutputDataItem
} from '@/usecase/book/Fetch/FetchOutputData';

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
