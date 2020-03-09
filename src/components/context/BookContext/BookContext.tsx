import React from 'react';
import { ActionType, State, useBooks } from './reducer';

type ContextType = {
  state: State;
  action: ActionType;
};

type Props = {
  children: React.ReactNode;
};

export const useBooksContext = (): [
  React.Context<ContextType>,
  React.FC<Props>
] => {
  const [state, action] = useBooks();
  const BookContext = React.createContext({ state, action });

  const BookProvider: React.FC<Props> = ({ children }: Props) => {
    return (
      <BookContext.Provider value={{ state, action }}>
        {children}
      </BookContext.Provider>
    );
  };

  return [BookContext, BookProvider];
};
