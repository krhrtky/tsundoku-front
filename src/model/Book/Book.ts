import { History } from '@/model/History';
import { Id as UserId } from '@/model/User';
import { Id, Name, Link, Status, Type } from './vo';
import { ReadedPage } from '../History/ReadedPage';
import { UUID } from '@/libs/UUID';

export class Book {
  readonly id: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;
  readonly userId: UserId;

  private constructor(
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
      Status.Stock,
      type,
      link,
      userId
    );
  }

  static buy(name: Name, type: Type, link: Link, userId: UserId): Book {
    return new Book(
      new Id(UUID.random()),
      name,
      Status.Bought,
      type,
      link,
      userId
    );
  }

  buy(): Book {
    return new Book(
      this.id,
      this.name,
      Status.Bought,
      this.type,
      this.link,
      this.userId
    );
  }

  startReading(): Book {
    return new Book(
      this.id,
      this.name,
      Status.Reading,
      this.type,
      this.link,
      this.userId
    );
  }

  readOver(): Book {
    return new Book(
      this.id,
      this.name,
      Status.Over,
      this.type,
      this.link,
      this.userId
    );
  }

  read(readedPage: ReadedPage): History {
    return History.create(this.id, readedPage);
  }
}
