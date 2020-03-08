import { Books } from '@/model/Book/Books';
import { Book } from '@/model/Book';
import { useReducer } from 'react';

type State = {
  books: Books;
};

type Register = 'Register';
type Delete = 'Delete';
type Update = 'Update';

// const register = (book: Book) => ({
//   type: 'Register',
//   payload: {
//     book
//   }
// });

type RegisterAction = {
  type: Register;
  payload: {
    book: Book;
  };
};

type DeleteAction = {
  type: Delete;
  payload: {
    book: Book;
  };
};

type UpdateAction = {
  type: Update;
  payload: {
    book: Book;
  };
};

type Action = RegisterAction | DeleteAction | UpdateAction;

const initialState: State = {
  books: Books.empty()
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Register':
      state.books = state.books.add(action.payload.book);
      return state;
    case 'Delete':
      state.books = state.books.pop(action.payload.book);
      return state;
    case 'Update':
      state.books = state.books
        .pop(action.payload.book)
        .add(action.payload.book);
      return state;
    default:
      throw new Error(`unexpected ActionType: ${action}`);
  }
};

type Dispatch = (book: Book) => void;

type ActionType = {
  register: Dispatch;
  delete: Dispatch;
  update: Dispatch;
};

export const userBooks = (): [State, ActionType] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [
    state,
    {
      register: (book: Book): void =>
        dispatch({ type: 'Register', payload: { book } }),
      delete: (book: Book): void =>
        dispatch({ type: 'Delete', payload: { book } }),
      update: (book: Book): void =>
        dispatch({ type: 'Update', payload: { book } })
    }
  ];
};
