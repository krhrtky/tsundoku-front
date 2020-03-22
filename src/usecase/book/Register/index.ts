import { Register as UseCase } from './Register';
import { RegisterInputData as InputData } from './RegisterInputData';
import { RegisterOutPutData as OutPutData } from './RegisterOutPutData';
export { InMemoryRegister } from './InMemoryRegister';

export type Register = UseCase;
export type RegisterInputData = InputData;
export type RegisterOutputData = OutPutData;
