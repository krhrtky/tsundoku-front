import { Id } from '@/model/Book';
import { FetchOutputData } from '@/usecase/book/Fetch/FetchOutputData';

export interface Fetch {
  fetchByUser: (userId: Id) => FetchOutputData;
}
