import { InMemoryBookRepository } from '@/model/Book/InMemoryBookRepository';
import { Register } from './Register';
import { RegisterInputData } from './RegisterInputData';
import { RegisterOutPutData } from './RegisterOutPutData';

export class ImMemoryRegister implements Register {
  private readonly repository = new InMemoryBookRepository();
  execute(inputData: RegisterInputData): RegisterOutPutData {
    return this.repository.save(inputData);
  }
}
