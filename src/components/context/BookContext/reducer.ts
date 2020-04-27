import { useReducer } from 'react';
import { Status, Type } from '@/model/Book';

export type Item = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
};

export type State = {
  books: Array<Item>;
};

const Register: 'Register' = 'Register';
const Delete: 'Delete' = 'Delete';
const Update: 'Update' = 'Update';

type Register = typeof Register;
type Delete = typeof Delete;
type Update = typeof Update;

type RegisterAction = {
  type: Register;
  payload: {
    book: Item;
  };
};

type DeleteAction = {
  type: Delete;
  payload: {
    book: Item;
  };
};

type UpdateAction = {
  type: Update;
  payload: {
    book: Item;
  };
};

type Action = RegisterAction | DeleteAction | UpdateAction;

const initialState: State = {
  books: []
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Register:
      return { books: state.books.concat(action.payload.book) };
    case Delete:
      return {
        books: state.books.filter(book => book.id !== action.payload.book.id)
      };
    case Update:
      return {
        books: state.books
          .filter(book => book.id !== action.payload.book.id)
          .concat([action.payload.book])
      };
    default:
      throw new Error(`unexpected ActionType: ${action}`);
  }
};

type Dispatch = (book: Item) => void;

export type ActionType = {
  register: Dispatch;
  delete: Dispatch;
  update: Dispatch;
};

export const useBooks = (injects?: State): [State, ActionType] => {
  const [state, dispatch] = useReducer(
    reducer,
    injects === null || injects === undefined ? initialState : injects
  );

  return [
    state,
    {
      register: (book: Item): void =>
        dispatch({ type: Register, payload: { book } }),
      delete: (book: Item): void =>
        dispatch({ type: Delete, payload: { book } }),
      update: (book: Item): void =>
        dispatch({ type: Update, payload: { book } })
    }
  ];
};
