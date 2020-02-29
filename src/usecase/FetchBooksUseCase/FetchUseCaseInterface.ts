import { Id } from '@/model/Book';

export type Books = Array<{
  name: string;
  status: string;
  type: string;
  link: string;
  userId: string;
}>;

export interface FetchUseCaseInterface {
  fetchByUser: (userId: Id) => Books;
}
