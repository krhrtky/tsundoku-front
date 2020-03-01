import { LoadLocalDataOutPutData } from '@/usecase/user/LoadLocalData/LoadLocalDataOutPutData';
import { Option } from 'fp-ts/es6/Option';

export interface UserRepository {
  getByLocalStorage(): Option<LoadLocalDataOutPutData>;
  save(user: LoadLocalDataOutPutData): void;
}
