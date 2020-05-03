import {
  BookRepository,
  FirebaseBookRepository,
  InMemoryBookRepository
} from '@/model/Book';
import { UpdateInterface } from './UpdateInterface';
import { UpdateInputData } from './UpdateInputData';
import { UpdateOutputData } from './UpdateOutputData';
import { Firebase } from '@/libs/external';

export class UpdateImpl implements UpdateInterface {
  private readonly bookRepository: BookRepository;

  constructor() {
    this.bookRepository = Firebase.isUnavailable()
      ? new InMemoryBookRepository()
      : new FirebaseBookRepository();
  }

  async execute(updateBook: UpdateInputData): Promise<UpdateOutputData> {
    return await this.bookRepository.update(updateBook);
  }
}
