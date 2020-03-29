import { BookRepository, RegisterResult } from '@/model/Book/BookRepository';
import { RegisterInputData } from '@/usecase/book/Register';
import { useBooksContext } from '@/components/context';
import { UUID } from '@/libs/UUID';
import { right } from 'fp-ts/lib/Either';
import { Status, Type } from '@/model/Book';

export class InMemoryBookRepository implements BookRepository {
  private readonly context = useBooksContext();
  save(newBook: RegisterInputData): RegisterResult {
    this.context.action.register({
      id: UUID.random(),
      ...newBook
    });

    return right(null);
  }
  all(): ReadonlyArray<{
    id: string;
    name: string;
    status: Status;
    type: Type;
    link: string;
    userId: string;
  }> {
    return this.context.state.books;
  }
}
