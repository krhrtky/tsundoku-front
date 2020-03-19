import { Book } from '@/model/Book/Book';

export class Books {
  readonly list: Array<Book>;
  constructor(list: Array<Book>) {
    this.list = list;
  }

  static empty(): Books {
    return new Books([]);
  }

  add(book: Book): Books {
    return new Books(this.list.concat([book]));
  }

  pop(book: Book): Books {
    return new Books(this.list.filter(b => b.id === book.id));
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }
}
