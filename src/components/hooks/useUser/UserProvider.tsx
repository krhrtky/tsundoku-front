import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { auth } from 'firebase';
import { pipe } from 'fp-ts/lib/pipeable';
import { fromNullable, getOrElse, map } from 'fp-ts/lib/Option';
import { Email, Id, Name, User } from '@/model/User';

type ContextType = {
  isLoading: boolean;
  user: User | null;
};

const initialValue: ContextType = {
  isLoading: true,
  user: null
};

const Context = createContext(initialValue);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isLoading = useMemo(() => user == null, [user]);

  useEffect(() => {
    auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const displayName = pipe(
          firebaseUser.providerData.find(provider => provider != null),
          fromNullable,
          map(provider => provider.displayName),
          getOrElse(() => firebaseUser.displayName),
          fromNullable,
          getOrElse(() => '')
        );

        const newUser = firebaseUser.isAnonymous
          ? User.visitor(firebaseUser.uid)
          : User.general(
              new Id(firebaseUser.uid),
              new Name(displayName),
              new Email('')
            );
        setUser(newUser);
      } else {
        auth()
          .signInAnonymously()
          .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
              alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
              console.error(error);
            }
          });
      }
    });
  }, []);

  return (
    <Context.Provider value={{ isLoading, user }}>{children}</Context.Provider>
  );
};

export const useUser = () => {
  return useContext(Context);
};
