import { History } from '@/model/History';
import { Id as UserId } from '@/model/User';
import {
  Id,
  Name,
  Link,
  Price,
  Status,
  Statuses,
  Type,
  CreatedAt,
  UpdatedAt
} from './vo';
import { ReadedPage } from '../History/ReadedPage';
import { UUID } from '@/libs/UUID';

export class Book {
  readonly id: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;
  readonly price: Price;
  readonly userId: UserId;
  readonly createdAt: CreatedAt;
  readonly updatedAt: UpdatedAt;

  constructor(
    id: Id,
    name: Name,
    status: Status,
    type: Type,
    link: Link,
    price: Price,
    userId: UserId,
    createdAt: CreatedAt,
    updatedAt: UpdatedAt
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.type = type;
    this.link = link;
    this.price = price;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static stock(
    name: Name,
    type: Type,
    link: Link,
    price: Price,
    userId: UserId,
    createdAt: CreatedAt,
    updatedAt: UpdatedAt
  ): Book {
    return new Book(
      new Id(UUID.random()),
      name,
      Statuses.Stock,
      type,
      link,
      price,
      userId,
      createdAt,
      updatedAt
    );
  }

  static buy(
    name: Name,
    type: Type,
    link: Link,
    price: Price,
    userId: UserId,
    createdAt: CreatedAt,
    updatedAt: UpdatedAt
  ): Book {
    return new Book(
      new Id(UUID.random()),
      name,
      Statuses.Bought,
      type,
      link,
      price,
      userId,
      createdAt,
      updatedAt
    );
  }

  buy(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Bought,
      this.type,
      this.link,
      this.price,
      this.userId,
      this.createdAt,
      this.updatedAt
    );
  }

  startReading(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Reading,
      this.type,
      this.link,
      this.price,
      this.userId,
      this.createdAt,
      this.updatedAt
    );
  }

  readOver(): Book {
    return new Book(
      this.id,
      this.name,
      Statuses.Over,
      this.type,
      this.link,
      this.price,
      this.userId,
      this.createdAt,
      this.updatedAt
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
