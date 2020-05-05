import { pipe } from 'fp-ts/lib/pipeable';
import { map, filter } from 'fp-ts/lib/ReadonlyArray';
import { SummaryPresenter } from './SummaryPresenter';
import { SummaryOutPutData } from '@/usecase/book/Summary/SummaryOutPutData';
import {
  Book,
  Id,
  Link,
  Name,
  Price,
  Status,
  Type,
  CreatedAt,
  UpdatedAt,
  TotalPages
} from '@/model/Book';
import { Id as UserId } from '@/model/User';
import { DateTime } from '@/libs/DateTime';

const length: (l: ReadonlyArray<Book>) => number = l => l.length;

export class SummaryPresenterImpl implements SummaryPresenter {
  handle(
    data: ReadonlyArray<{
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
    }>
  ): SummaryOutPutData {
    const list = pipe(
      data,
      map(
        item =>
          new Book(
            new Id(item.id),
            new Name(item.name),
            item.status,
            item.type,
            new Link(item.link),
            new Price(item.price),
            new TotalPages(item.totalPages),
            new UserId(item.userId),
            new CreatedAt(DateTime.fromDate(item.createdAt)),
            new UpdatedAt(DateTime.fromDate(item.updatedAt))
          )
      )
    );

    const total = length(list);
    const bought = pipe(
      list,
      filter(book => book.isBought()),
      books => books.length
    );
    const reading = pipe(
      list,
      filter(book => book.isReading()),
      books => books.length
    );
    const over = pipe(
      list,
      filter(book => book.isOver()),
      books => books.length
    );

    return {
      total,
      bought,
      reading,
      over
    };
  }
}
