export { Book } from './Book';
export { Id, Name, Link, Price, Types, Statuses } from './vo';
import { Type as T, Status as S } from './vo';
export type Type = T;
export type Status = S;
import { BookRepository as Repository } from './BookRepository';
export { InMemoryBookRepository } from './InMemoryBookRepository';
export type BookRepository = Repository;
