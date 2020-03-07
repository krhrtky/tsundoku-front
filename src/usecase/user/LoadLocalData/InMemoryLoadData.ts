import { useState, useEffect } from 'react';
import { pipe } from 'fp-ts/lib/pipeable';
import { getOrElse } from 'fp-ts/lib/Option';
import { LoadLocalData } from '@/usecase/user/LoadLocalData/LoadLocalData';
import { LoadLocalDataOutPutData } from '@/usecase/user/LoadLocalData/LoadLocalDataOutPutData';
import { InMemoryUserRepository } from '@/model/User/InMemoryUserRepository';
import { User } from '@/model/User';

const inMemoryUserRepository = new InMemoryUserRepository();

const visitor = User.visitor();
const initialState: LoadLocalDataOutPutData = {
  id: visitor.id.value,
  name: visitor.name.value,
  email: visitor.email.value,
  type: visitor.type.toString()
};

export class InMemoryLoadData implements LoadLocalData {
  handle(): LoadLocalDataOutPutData {
    const [user, setUser] = useState(initialState);

    useEffect(() => {
      pipe(
        inMemoryUserRepository.getByLocalStorage(),
        getOrElse(() => initialState),
        newUser => {
          inMemoryUserRepository.save(newUser);
          setUser(newUser);
        }
      );
    }, []);

    return user;
  }
}
