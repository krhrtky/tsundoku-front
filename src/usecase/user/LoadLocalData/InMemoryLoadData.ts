import { pipe } from 'fp-ts/es6/pipeable';
import { getOrElse } from 'fp-ts/es6/Option';
import { LoadLocalData } from '@/usecase/user/LoadLocalData/LoadLocalData';
import { LoadLocalDataOutPutData } from '@/usecase/user/LoadLocalData/LoadLocalDataOutPutData';
import { InMemoryUserRepository } from '@/model/User/InMemoryUserRepository';
import { User } from '@/model/User';

const inMemoryUserRepository = new InMemoryUserRepository();

export class InMemoryLoadData implements LoadLocalData {
  handle(): LoadLocalDataOutPutData {
    return pipe(
      inMemoryUserRepository.getByLocalStorage(),
      getOrElse(() => {
        const visitor = User.visitor();
        return {
          id: visitor.id.value,
          name: 'visitor',
          email: '',
          type: 'visitor'
        };
      })
    );
  }
}
