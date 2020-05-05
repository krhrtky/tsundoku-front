import { Status, Type } from '@/model/Book';

export type FetchOutputDataItem = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  totalPages: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FetchOutputData = ReadonlyArray<FetchOutputDataItem>;
