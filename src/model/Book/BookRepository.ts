import { RegisterInputData } from '@/usecase/book/Register';
import { Either } from 'fp-ts/lib/Either';

export type RegisterResult = Either<string, null>;

export interface BookRepository {
  save(newBook: RegisterInputData): RegisterResult;
}
