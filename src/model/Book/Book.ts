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
  TotalPages,
  CreatedAt,
  UpdatedAt
} from './vo';
import { ReadedPage } from '../History/ReadedPage';
import { UUID } from '@/libs/UUID';

export type BookValue = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  totalPages: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Book {
  readonly id: Id;
  readonly name: Name;
  readonly status: Status;
  readonly type: Type;
  readonly link: Link;
  readonly price: Price;
  readonly totalPages: TotalPages;
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
    totalPages: TotalPages,
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
    this.totalPages = totalPages;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static stock(
    name: Name,
    type: Type,
    link: Link,
    price: Price,
    totalPages: TotalPages,
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
      totalPages,
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
    totalPages: TotalPages,
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
      totalPages,
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
      this.totalPages,
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
      this.totalPages,
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
      this.totalPages,
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

  values(): BookValue {
    return {
      id: this.id.value,
      name: this.name.value,
      status: this.status,
      type: this.type,
      link: this.link.value,
      price: this.price.value,
      totalPages: this.totalPages.value,
      userId: this.userId.value,
      createdAt: this.createdAt.value.toDate(),
      updatedAt: this.updatedAt.value.toDate()
    };
  }
}
