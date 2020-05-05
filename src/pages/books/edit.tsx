import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { fold } from 'fp-ts/lib/Either';
import Error from 'next/error';
import { EditForm } from '@/components/organisms/Book/EditForm';
import { useBooksContext } from '@/components/context';
import { UpdateImpl } from '@/usecase/book/Update';

const Edit: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { state } = useBooksContext();
  const book = state.books.find(book => book.id === router.query.id);
  const update = new UpdateImpl();

  if (book == null) {
    return <Error statusCode={404} />;
  }

  return (
    <EditForm
      initialValues={book}
      submitCallback={async initialValues => {
        const result = await update.execute({
          id: book.id,
          userId: book.userId,
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
          ...initialValues
        });
        fold<string, null, void>(
          errorMessage => enqueueSnackbar(errorMessage, { variant: 'error' }),
          () => {
            enqueueSnackbar('success', { variant: 'success' });
            router.push('/books');
          }
        )(result);
      }}
    />
  );
};

export default Edit;
