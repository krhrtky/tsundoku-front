import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { EditForm } from '@/components/organisms/Book/EditForm';
import { useBooksContext } from '@/components/context';
import { InMemoryUpdate } from '@/usecase/book/Update';

const Edit: NextPage = () => {
  const router = useRouter();
  const { state } = useBooksContext();
  const book = state.books.find(book => book.id === router.query.id);
  const update = new InMemoryUpdate();

  if (book == null) {
    return <Error statusCode={404} />;
  }

  return (
    <EditForm
      initialValues={book}
      submitCallback={initialValues => {
        console.log(
          update.execute({ id: book.id, userId: book.userId, ...initialValues })
        );
      }}
    />
  );
};

export default Edit;
