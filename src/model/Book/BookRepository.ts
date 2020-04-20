import { Either } from 'fp-ts/lib/Either';
import { RegisterInputData } from '@/usecase/book/Register';
import { UpdateInputData } from '@/usecase/book/Update';

export type UpdateResult = Either<string, null>;

export interface BookRepository {
  save(newBook: RegisterInputData): UpdateResult;
  all(): ReadonlyArray<{
    id: string;
    name: string;
    status: string;
    type: string;
    link: string;
    userId: string;
  }>;
  update(updateBook: UpdateInputData): UpdateResult;
}
