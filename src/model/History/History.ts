import { Id } from './Id';
import { Id as BookId } from '@/model/Book';
import { ReadedPage } from './ReadedPage';
import { ReadDateTime } from './ReadDateTime';
import { DateTime } from '@/libs/DateTime';

export class History {
  readonly id?: Id;
  readonly bookId: BookId;
  readonly readedPage: ReadedPage;
  readonly readDateTime: ReadDateTime;

  private constructor(
    bookId: BookId,
    readedPage: ReadedPage,
    readDateTime: ReadDateTime
  ) {
    this.bookId = bookId;
    this.readedPage = readedPage;
    this.readDateTime = readDateTime;
  }

  static create(bookId: BookId, readedPage: ReadedPage): History {
    return new History(bookId, readedPage, new ReadDateTime(DateTime.now()));
  }
}
