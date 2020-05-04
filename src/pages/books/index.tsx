import React from 'react';
import { useBooksContext, useConfirmModal } from '@/components/context';
import { BookList } from '@/components/templates/BookList';
import { InMemoryDelete } from '@/usecase/book';
import { useRouter } from 'next/router';
import { FetchOutputDataItem } from '@/usecase/book/Fetch/FetchOutputData';
import { fold } from 'fp-ts/lib/Either';
import { useSnackbar } from 'notistack';

const Books: React.FC = () => {
  const router = useRouter();
  const { state } = useBooksContext();
  const openModal = useConfirmModal(['削除しますか?']);
  const goToEditPage = (book: FetchOutputDataItem) => {
    router.push(`/books/edit?id=${book.id}`);
  };
  const Delete = new InMemoryDelete();
  const { enqueueSnackbar } = useSnackbar();

  const openDeleteModal = (book: FetchOutputDataItem) => () => {
    openModal(async () => {
      const result = await Delete.handle(book);
      fold<string, null, void>(
        errorMessage => enqueueSnackbar(errorMessage, { variant: 'error' }),
        () => enqueueSnackbar('success', { variant: 'success' })
      )(result);
    });
  };

  return (
    <BookList
      books={state.books}
      onEdit={goToEditPage}
      onDelete={openDeleteModal}
    />
  );
};

export default Books;
