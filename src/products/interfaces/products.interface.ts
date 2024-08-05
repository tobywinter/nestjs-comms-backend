export interface Money {
  amount: number;
  currency: string;
}

export type PouchSize = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface Product {
  pouchSize: PouchSize;
  price: Money;
}
