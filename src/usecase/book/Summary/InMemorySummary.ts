import { pipe } from 'fp-ts/lib/pipeable';
import { BookRepository, InMemoryBookRepository } from '@/model/Book';
import { Summary } from './Summary';
import { SummaryInteractor } from './SummaryInteractor';
import { SummaryOutPutData } from './SummaryOutPutData';
import { SummaryInteractorImpl } from './SummaryInteractorImpl';

export class InMemorySummary implements Summary {
  private readonly repository: BookRepository = new InMemoryBookRepository();
  private readonly interactor: SummaryInteractor = new SummaryInteractorImpl();
  execute(): SummaryOutPutData {
    return pipe(this.repository.all(), this.interactor.handle);
  }
}
