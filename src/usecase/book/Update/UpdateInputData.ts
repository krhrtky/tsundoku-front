import { Status, Type } from '@/model/Book';

export type UpdateInputData = {
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
