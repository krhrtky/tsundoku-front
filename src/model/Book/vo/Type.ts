const Physics: 'Physics' = 'Physics';
const Kindle: 'Kindle' = 'Kindle';
const EPub: 'Epub' = 'Epub';

export const Types = {
  Physics,
  Kindle,
  EPub
};

type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;

export type Type = Unbox<typeof Types>;
