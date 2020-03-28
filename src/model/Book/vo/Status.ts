const Stock: 'Stock' = 'Stock';
const Bought: 'Bought' = 'Bought';
const Reading: 'Reading' = 'Reading';
const Over: 'Over' = 'Over';

export const Statuses = {
  Stock,
  Bought,
  Reading,
  Over
};

type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;

export type Status = Unbox<typeof Statuses>;
