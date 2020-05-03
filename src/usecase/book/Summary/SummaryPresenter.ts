import { SummaryOutPutData } from '@/usecase/book/Summary/SummaryOutPutData';

export interface SummaryPresenter {
  handle(
    data: ReadonlyArray<{
      id: string;
      name: string;
      status: string;
      type: string;
      link: string;
      userId: string;
    }>
  ): SummaryOutPutData;
}
