import React, { useContext } from 'react';
import { ActionType, State, useBooks } from './reducer';

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
    register: _ => {
      throw new Error('Context does not inject.');
    },
    delete: _ => {
      throw new Error('Context does not inject.');
    },
    update: _ => {
      throw new Error('Context does not inject.');
    }
  }
};

const Context = React.createContext(initial);

export const useBooksProvider = (): React.FC<Props> => ({
  children
}: Props) => {
  const [state, action] = useBooks();
  return (
    <Context.Provider value={{ state, action }}>{children}</Context.Provider>
  );
};

export const useBooksContext = (): ContextType => useContext(Context);
