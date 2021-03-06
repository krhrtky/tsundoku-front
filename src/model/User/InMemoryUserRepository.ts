import { pipe } from 'fp-ts/lib/pipeable';
import { Option, fromNullable, map } from 'fp-ts/lib/Option';
import { LocalStorage } from '@/libs/Container/localstrage';
import { UserRepository } from '@/model/User/UserRepository';
import { LoadLocalDataOutPutData } from '@/usecase/user/LoadLocalData/LoadLocalDataOutPutData';

const USER_KEY = 'user';

export class InMemoryUserRepository implements UserRepository {
  private readonly localStorage: Storage = LocalStorage.getStorage();
  getByLocalStorage(): Option<LoadLocalDataOutPutData> {
    return pipe(
      this.localStorage.getItem(USER_KEY),
      fromNullable,
      map(userStr => JSON.parse(userStr) as LoadLocalDataOutPutData)
    );
  }
  save(user: LoadLocalDataOutPutData): void {
    this.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
