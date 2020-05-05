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
  createdAt: Date;
  updatedAt: Date;
};

export type State = {
  books: ReadonlyArray<Item>;
};

const Register = 'Register' as const;
const Delete = 'Delete' as const;
const Update = 'Update' as const;
const Init = 'Init' as const;

type RegisterAction = {
  type: typeof Register;
  payload: {
    book: Item;
  };
};

type DeleteAction = {
  type: typeof Delete;
  payload: {
    book: Item;
  };
};

type UpdateAction = {
  type: typeof Update;
  payload: {
    book: Item;
  };
};

type InitAction = {
  type: typeof Init;
  payload: State;
};

type Action = RegisterAction | DeleteAction | UpdateAction | InitAction;

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
    case 'Init':
      return action.payload;
    default:
      throw new Error(`unexpected ActionType: ${action}`);
  }
};

type SingleItemDispatch = (book: Item) => void;
type MultiItemsDispatch = (books: ReadonlyArray<Item>) => void;

export type ActionType = {
  register: SingleItemDispatch;
  delete: SingleItemDispatch;
  update: SingleItemDispatch;
  init: MultiItemsDispatch;
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
        dispatch({ type: Update, payload: { book } }),
      init: (books: ReadonlyArray<Item>): void =>
        dispatch({ type: Init, payload: { books } })
    }
  ];
};
