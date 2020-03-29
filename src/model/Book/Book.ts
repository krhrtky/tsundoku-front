import { History } from '@/model/History';
import { Id as UserId } from '@/model/User';
import { Id, Name, Link, Status, Statuses, Type } from './vo';
import { ReadedPage } from '../History/ReadedPage';
import { UUID } from '@/libs/UUID';

export class Book {
  readonly id: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;
  readonly userId: UserId;

  constructor(
    id: Id,
    name: Name,
    status: Status,
    type: Type,
    link: Link,
    userId: UserId
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.type = type;
    this.link = link;
    this.userId = userId;
  }

  static stock(name: Name, type: Type, link: Link, userId: UserId): Book {
    return new Book(
      new Id(UUID.random()),
      name,
      Statuses.Stock,
      type,
      link,
      userId
    );
  }

  static buy(name: Name, type: Type, link: Link, userId: UserId): Book {
    return new Book(
      new Id(UUID.random()),
      name,
      Statuses.Bought,
      type,
      link,
      userId
    );
  }

  buy(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Bought,
      this.type,
      this.link,
      this.userId
    );
  }

  startReading(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Reading,
      this.type,
      this.link,
      this.userId
    );
  }

  readOver(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Over,
      this.type,
      this.link,
      this.userId
    );
  }

  read(readedPage: ReadedPage): History {
    return History.create(this.id, readedPage);
  }

  isStocked(): boolean {
    return this.status === Statuses.Stock;
  }

  isBought(): boolean {
    return this.status === Statuses.Bought;
  }

  isReading(): boolean {
    return this.status === Statuses.Reading;
  }

  isOver(): boolean {
    return this.status === Statuses.Over;
  }
}
