import { Injectable } from '@nestjs/common';
import { Money, PouchSize, Product } from './interfaces/products.interface';

const PRODUCTS: Record<string, Money> = {
  A: { amount: 55.5, currency: 'GBP' },
  B: { amount: 59.5, currency: 'GBP' },
  C: { amount: 62.75, currency: 'GBP' },
  D: { amount: 66.0, currency: 'GBP' },
  E: { amount: 69.0, currency: 'GBP' },
  F: { amount: 71.25, currency: 'GBP' },
};

@Injectable()
export class ProductsService {
  findOne(id: string): Product {
    const pouchSize = id.toString() as PouchSize;
    return {
      pouchSize,
      price: PRODUCTS[pouchSize],
    };
  }
}
