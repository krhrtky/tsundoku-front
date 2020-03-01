import { pipe } from 'fp-ts/lib/pipeable';
import { getOrElse } from 'fp-ts/lib/Option';
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
        const data = {
          id: visitor.id.value,
          name: visitor.name.value,
          email: visitor.email.value,
          type: visitor.type.toString()
        };
        inMemoryUserRepository.save(data);
        return data;
      })
    );
  }
}
