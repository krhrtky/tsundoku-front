import { Id } from '@/model/Book/Id';

type Books = Array<{
  name: string;
  status: string;
  type: string;
  link: string;
  userId: string;
}>;

export type IFetchUseCase = {
  fetchByUser: (userId: Id) => Books;
};
