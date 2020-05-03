import { UpdateInputData } from './UpdateInputData';
import { UpdateOutputData } from './UpdateOutputData';

export interface UpdateInterface {
  execute(updateBook: UpdateInputData): Promise<UpdateOutputData>;
}
