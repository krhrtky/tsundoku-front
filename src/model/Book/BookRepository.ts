import { RegisterInputData } from '@/usecase/book/Register';
import { Either } from 'fp-ts/lib/Either';

export type RegisterResult = Either<string, null>;

export interface BookRepository {
  save(newBook: RegisterInputData): RegisterResult;
  all(): ReadonlyArray<{
    id: string;
    name: string;
    status: string;
    type: string;
    link: string;
    userId: string;
  }>;
}
