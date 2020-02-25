import { Id } from './Id';
import { Name } from './Name';
import { Link } from './Link';
import { Status } from './Status';
import { Type } from './Type';
import { ReadedPage } from '../History/ReadedPage';
import { History } from '../History/History';

export class Book {
  readonly id: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;

  private constructor(name: Name, status: Status, type: Type, link: Link) {
    this.name = name;
    this.status = status;
    this.type = type;
    this.link = link;
  }

  static stock(name: Name, type: Type, link: Link): Book {
    return new Book(name, Status.Stock, type, link);
  }

  static buy(name: Name, type: Type, link: Link): Book {
    return new Book(name, Status.Bought, type, link);
  }

  buy(): Book {
    return new Book(this.name, Status.Bought, this.type, this.link);
  }

  startReading(): Book {
    return new Book(this.name, Status.Reading, this.type, this.link);
  }

  readOver(): Book {
    return new Book(this.name, Status.Over, this.type, this.link);
  }

  read(readedPage: ReadedPage): History {
    return History.create(this.id, readedPage);
  }
}
