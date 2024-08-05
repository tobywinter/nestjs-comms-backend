import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a product when provided a valid id', () => {
      const productId = 'A';
      expect(service.findOne(productId)).toStrictEqual({
        pouchSize: 'A',
        price: { amount: 55.5, currency: 'GBP' },
      });
    });
  });
});
