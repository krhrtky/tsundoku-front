import { LocalStorage } from '@/libs/Container/localstrage';
import { UserRepository } from '@/model/User/UserRepository';
import { LoadLocalDataOutPutData } from '@/usecase/user/LoadLocalData/LoadLocalDataOutPutData';
import { pipe } from 'fp-ts/es6/pipeable';
import { Option, fromNullable, map } from 'fp-ts/es6/Option';

const localStorage: Storage = LocalStorage.getLocalStorage();

export class InMemoryUserRepository implements UserRepository {
  getByLocalStorage(): Option<LoadLocalDataOutPutData> {
    return pipe(
      localStorage.getItem('user'),
      fromNullable,
      map(userStr => JSON.parse(userStr) as LoadLocalDataOutPutData)
    );
  }
}
