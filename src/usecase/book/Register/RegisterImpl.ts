import { InMemoryBookRepository } from '@/model/Book/InMemoryBookRepository';
import { RegisterInteractor } from './RegisterInteractor';
import { RegisterInputData } from './RegisterInputData';
import { RegisterOutPutData } from './RegisterOutPutData';
import { BookRepository, FirebaseBookRepository } from '@/model/Book';
import { Firebase } from '@/libs/external';

export class RegisterImpl implements RegisterInteractor {
  private readonly repository: BookRepository;
  constructor() {
    this.repository = Firebase.isUnavailable()
      ? new InMemoryBookRepository()
      : new FirebaseBookRepository();
  }
  execute(inputData: RegisterInputData): Promise<RegisterOutPutData> {
    return this.repository.save(inputData);
  }
}
