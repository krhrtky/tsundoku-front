import { Either } from 'fp-ts/lib/Either';
import { RegisterInputData } from '@/usecase/book/Register';
import { UpdateInputData } from '@/usecase/book/Update';
import {
  DeleteInputData,
  DeleteOutputData
} from '@/usecase/book/Delete/DeleteInteractor';
import { Status, Type } from '@/model/Book/index';
import { Id as UserId } from '@/model/User';

export type UpdateResult = Either<string, null>;

export interface BookRepository {
  save(newBook: RegisterInputData): Promise<UpdateResult>;
  all(): ReadonlyArray<{
    id: string;
    name: string;
    status: Status;
    type: Type;
    link: string;
    userId: string;
  }>;
  update(updateBook: UpdateInputData): Promise<UpdateResult>;
  delete(deleteBook: DeleteInputData): Promise<DeleteOutputData>;
  findByUserId(
    userId: UserId
  ): Promise<
    ReadonlyArray<{
      id: string;
      name: string;
      status: Status;
      type: Type;
      link: string;
      userId: string;
    }>
  >;
}
