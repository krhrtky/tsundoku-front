import { RegisterInputData } from './RegisterInputData';
import { RegisterOutPutData } from './RegisterOutPutData';

export interface RegisterInteractor {
  execute: (inputData: RegisterInputData) => Promise<RegisterOutPutData>;
}
