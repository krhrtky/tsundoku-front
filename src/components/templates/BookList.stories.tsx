import React from 'react';
import { storiesOf } from '@storybook/react';
import { BookList } from './BookList';
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

storiesOf('Templates/BookList', module)
  .add('empty list', () => <BookList books={[]} />)
  .add('single row', () => <BookList books={singleRowData} />)
  .add('multi row', () => <BookList books={multiRowData} />);
