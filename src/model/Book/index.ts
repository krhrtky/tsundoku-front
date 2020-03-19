export { Book } from './Book';
export { Id, Name, Type, Status, Link } from './vo';
import { BookRepository as Repository } from './BookRepository';
export { InMemoryBookRepository } from './InMemoryBookRepository';
export type BookRepository = Repository;
