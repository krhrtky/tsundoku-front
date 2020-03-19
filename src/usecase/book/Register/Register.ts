import { RegisterInputData } from './RegisterInputData';
import { RegisterOutPutData } from './RegisterOutPutData';

export interface Register {
  execute: (inputData: RegisterInputData) => RegisterOutPutData;
}
