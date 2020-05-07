export { Book } from './Book';
import { BookValue as Value } from './Book';
export type BookValue = Value;
export {
  Id,
  Name,
  Link,
  Price,
  Types,
  Statuses,
  CreatedAt,
  UpdatedAt,
  TotalPages
} from './vo';
import { Type as T, Status as S } from './vo';
export type Type = T;
export type Status = S;
import { BookRepository as Repository } from './BookRepository';
export type BookRepository = Repository;
export { InMemoryBookRepository } from './InMemoryBookRepository';
export { FirebaseBookRepository } from './FirebaseBookRepository';
