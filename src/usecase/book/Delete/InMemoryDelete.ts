import {
  BookRepository,
  FirebaseBookRepository,
  InMemoryBookRepository
} from '@/model/Book';
import {
  DeleteInteractor,
  DeleteInputData,
  DeleteOutputData
} from './DeleteInteractor';
import { Firebase } from '@/libs/external';

export class InMemoryDelete implements DeleteInteractor {
  private readonly repository: BookRepository;

  constructor() {
    this.repository = Firebase.isUnavailable()
      ? new InMemoryBookRepository()
      : new FirebaseBookRepository();
  }
  async handle(inputData: DeleteInputData): Promise<DeleteOutputData> {
    return this.repository.delete(inputData);
  }
}
