import { FetchUseCaseInterface, Books } from './FetchUseCaseInterface';
import { Id } from '@/model/Book';

export class FetchBooksUseCase implements FetchUseCaseInterface {
  public fetchByUser(id: Id): Books {
    console.log(id);
    return [];
  }
}
