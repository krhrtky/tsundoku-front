import { Either } from 'fp-ts/lib/Either';
import { Status, Type } from '@/model/Book';

export type DeleteInputData = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
};

export type DeleteOutputData = Either<string, null>;

export interface DeleteInteractor {
  handle(inputData: DeleteInputData): Promise<DeleteOutputData>;
}
