import { RegisterInteractor as UseCase } from './RegisterInteractor';
import { RegisterInputData as InputData } from './RegisterInputData';
import { RegisterOutPutData as OutPutData } from './RegisterOutPutData';
export { RegisterImpl } from './RegisterImpl';

export type Register = UseCase;
export type RegisterInputData = InputData;
export type RegisterOutputData = OutPutData;
