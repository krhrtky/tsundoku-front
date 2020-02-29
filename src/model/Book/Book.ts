import { History } from '@/model/History';
import { Id as UserId } from '@/model/User';
import { Id } from './vo//Id';
import { Name } from './vo//Name';
import { Link } from './vo//Link';
import { Status } from './vo//Status';
import { Type } from './vo//Type';
import { ReadedPage } from '../History/ReadedPage';

export class Book {
  readonly id?: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;
  readonly userId: UserId;

  private constructor(
    name: Name,
    status: Status,
    type: Type,
    link: Link,
    userId: UserId
  ) {
    this.name = name;
    this.status = status;
    this.type = type;
    this.link = link;
    this.userId = userId;
  }

  static stock(name: Name, type: Type, link: Link, userId: UserId): Book {
    return new Book(name, Status.Stock, type, link, userId);
  }

  static buy(name: Name, type: Type, link: Link, userId: UserId): Book {
    return new Book(name, Status.Bought, type, link, userId);
  }

  buy(): Book {
    return new Book(
      this.name,
      Status.Bought,
      this.type,
      this.link,
      this.userId
    );
  }

  startReading(): Book {
    return new Book(
      this.name,
      Status.Reading,
      this.type,
      this.link,
      this.userId
    );
  }

  readOver(): Book {
    return new Book(this.name, Status.Over, this.type, this.link, this.userId);
  }

  read(readedPage: ReadedPage): History {
    if (this.id == null) {
      throw new Error(`Book[${this.name}] is not registered`);
    }
    return History.create(this.id, readedPage);
  }
}
