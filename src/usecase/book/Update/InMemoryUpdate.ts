import { BookRepository, InMemoryBookRepository } from '@/model/Book';
import { UpdateInterface } from './UpdateInterface';
import { UpdateInputData } from './UpdateInputData';
import { UpdateOutputData } from './UpdateOutputData';

export class InMemoryUpdate implements UpdateInterface {
  private readonly bookRepository: BookRepository = new InMemoryBookRepository();

  execute(updateBook: UpdateInputData): UpdateOutputData {
    return this.bookRepository.update(updateBook);
  }
}
