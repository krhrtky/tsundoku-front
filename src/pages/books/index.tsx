import React from 'react';
import { useBooksContext, useConfirmModal } from '@/components/context';
import { BookList } from '@/components/templates/BookList';
import { InMemoryDelete } from '@/usecase/book';
import { useRouter } from 'next/router';
import { FetchOutputDataItem } from '@/usecase/book/Fetch/FetchOutputData';

const Books: React.FC = () => {
  const router = useRouter();
  const { state } = useBooksContext();
  const openModal = useConfirmModal(['削除しますか?']);
  const goToEditPage = (book: FetchOutputDataItem) => {
    router.push(`/books/edit?id=${book.id}`);
  };
  const inMemoryDelete = new InMemoryDelete();

  const openDeleteModal = (book: FetchOutputDataItem) => () => {
    openModal(async () => {
      inMemoryDelete.handle(book);
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
