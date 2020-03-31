import { pipe } from 'fp-ts/lib/pipeable';
import { map, filter } from 'fp-ts/lib/ReadonlyArray';
import { SummaryInteractor } from './SummaryInteractor';
import { SummaryOutPutData } from '@/usecase/book/Summary/SummaryOutPutData';
import { Book, Id, Link, Name } from '@/model/Book';
import { Status, Type } from '@/model/Book/vo';
import { Id as UserId } from '@/model/User';

const length: (l: ReadonlyArray<Book>) => number = l => l.length;

export class SummaryInteractorImpl implements SummaryInteractor {
  handle(
    data: ReadonlyArray<{
      id: string;
      name: string;
      status: Status;
      type: Type;
      link: string;
      userId: string;
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
            new UserId(item.userId)
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