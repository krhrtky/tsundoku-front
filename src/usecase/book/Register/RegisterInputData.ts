import { Status, Type } from '@/model/Book';

export type RegisterInputData = {
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
};
