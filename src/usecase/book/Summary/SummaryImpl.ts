import { pipe } from 'fp-ts/lib/pipeable';
import {
  BookRepository,
  FirebaseBookRepository,
  InMemoryBookRepository
} from '@/model/Book';
import { Summary } from './Summary';
import { SummaryPresenter } from './SummaryPresenter';
import { SummaryPresenterImpl } from './SummaryPresenterImpl';
import { SummaryOutPutData } from './SummaryOutPutData';
import { Firebase } from '@/libs/external';

export class SummaryImpl implements Summary {
  private readonly repository: BookRepository;
  constructor() {
    this.repository = Firebase.isUnavailable()
      ? new InMemoryBookRepository()
      : new FirebaseBookRepository();
  }
  private readonly presenter: SummaryPresenter = new SummaryPresenterImpl();
  execute(): SummaryOutPutData {
    return pipe(this.repository.all(), this.presenter.handle);
  }
}
