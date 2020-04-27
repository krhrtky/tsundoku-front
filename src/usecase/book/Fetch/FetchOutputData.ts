import { Status, Type } from '@/model/Book';

export type FetchOutputDataItem = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
};

export type FetchOutputData = ReadonlyArray<FetchOutputDataItem>;
