import { right } from 'fp-ts/lib/Either';
import { UUID } from '@/libs/UUID';
import { BookRepository, OutputDate, UpdateResult } from './BookRepository';
import { RegisterInputData } from '@/usecase/book/Register';
import { useBooksContext } from '@/components/context';
import { UpdateInputData } from '@/usecase/book/Update';
import { DeleteInputData, DeleteOutputData } from '@/usecase/book';
import { Id as UserId } from '@/model/User';

export class InMemoryBookRepository implements BookRepository {
  private readonly context = useBooksContext();

  async save(newBook: RegisterInputData): Promise<UpdateResult> {
    const now = new Date();
    this.context.action.register({
      id: UUID.random(),
      createdAt: now,
      updatedAt: now,
      ...newBook
    });

    return right(null);
  }

  all(): OutputDate {
    return this.context.state.books;
  }

  async update(updateBook: UpdateInputData): Promise<UpdateResult> {
    this.context.action.update(updateBook);
    return right(null);
  }

  async delete(deleteBook: DeleteInputData): Promise<DeleteOutputData> {
    this.context.action.delete(deleteBook);
    return right(null);
  }

  async findByUserId(_: UserId): Promise<OutputDate> {
    return this.context.state.books;
  }
}
