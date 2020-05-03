import React, { useContext, useEffect } from 'react';
import { ActionType, State, useBooks } from './reducer';
import { Firebase } from '@/libs/external';
import { FirebaseBookRepository } from '@/model/Book';
import { useUser } from '@/components/hooks';

type ContextType = {
  state: State;
  action: ActionType;
};

type Props = {
  children: React.ReactNode;
};

const initial: ContextType = {
  state: {
    books: []
  },
  action: {
    register: (_): void => {
      throw new Error('Context does not inject.');
    },
    delete: (_): void => {
      throw new Error('Context does not inject.');
    },
    update: (_): void => {
      throw new Error('Context does not inject.');
    },
    init: _ => {
      throw new Error('Context does not inject.');
    }
  }
};

const Context = React.createContext(initial);

export const BooksProvider: React.FC<Props> = ({ children }: Props) => {
  const repository = new FirebaseBookRepository();
  const { user } = useUser();
  const [state, action] = useBooks();

  useEffect(() => {
    if (user == null || Firebase.isUnavailable()) {
      return;
    }
    repository.findByUserId(user.id).then(books => action.init(books));
  }, [user]);

  return (
    <Context.Provider value={{ state, action }}>{children}</Context.Provider>
  );
};

export const useBooksContext = (): ContextType => useContext(Context);
