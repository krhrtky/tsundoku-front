import { InMemoryBookRepository } from '@/model/Book';
import {
  DeleteInteractor,
  DeleteInputData,
  DeleteOutputData
} from './DeleteInteractor';

export class InMemoryDelete implements DeleteInteractor {
  private readonly repository = new InMemoryBookRepository();
  handle(inputData: DeleteInputData): DeleteOutputData {
    return this.repository.delete(inputData);
  }
}
