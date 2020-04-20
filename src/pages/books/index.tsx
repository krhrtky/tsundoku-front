import React from 'react';
import { useBooksContext } from '@/components/context';
import { BookList } from '@/components/templates/BookList';

const Books: React.FC = () => {
  const { state } = useBooksContext();
  console.log(state);
  return (
    <>
      <BookList books={state.books} />
    </>
  );
};

export default Books;
