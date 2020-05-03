import { right } from 'fp-ts/lib/Either';
import { UUID } from '@/libs/UUID';
import { Status, Type } from '.';
import { BookRepository, UpdateResult } from './BookRepository';
import { RegisterInputData } from '@/usecase/book/Register';
import { useBooksContext } from '@/components/context';
import { UpdateInputData } from '@/usecase/book/Update';
import { DeleteInputData, DeleteOutputData } from '@/usecase/book';

export class InMemoryBookRepository implements BookRepository {
  private readonly context = useBooksContext();

  save(newBook: RegisterInputData): UpdateResult {
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

  update(updateBook: UpdateInputData): UpdateResult {
    this.context.action.update(updateBook);
    return right(null);
  }

  delete(deleteBook: DeleteInputData): DeleteOutputData {
    this.context.action.delete(deleteBook);
    return right(null);
  }
}
