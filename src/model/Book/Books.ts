import { Book } from '@/model/Book/Book';

export class Books {
  readonly list: Array<Book>;
  constructor(list: Array<Book>) {
    this.list = list;
  }

  get isEmpty(): boolean {
    return this.list.length === 0;
  }
}
