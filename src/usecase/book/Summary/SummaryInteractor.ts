import { SummaryOutPutData } from '@/usecase/book/Summary/SummaryOutPutData';

export interface SummaryInteractor {
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
