import { Test, TestingModule } from '@nestjs/testing';
import { CommsService } from './comms.service';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';

describe('CommsService', () => {
  let service: CommsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommsService, UsersService, ProductsService],
    }).compile();

    service = module.get<CommsService>(CommsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When provided a valid id', () => {
    it('should return a comm for a user with a single Cat', () => {
      const commId = '618f4ed6-1c5b-4993-a149-f64700bf31dd';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        title: 'Your next delivery for Betsy',
        message:
          "Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.",
        totalPrice: 69.0,
      });
    });

    it('should return a comm for a user with 2 Cats', () => {
      const commId = 'ce51784f-589c-438a-b091-ef3f4d3d4c49';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        title: 'Your next delivery for Fern and Alejandra',
        message:
          "Hey Monica! In two days' time, we'll be charging you for your next order for Fern and Alejandra's fresh food.",
        totalPrice: 135,
      });
    });

    xit('should return a comm for a user with 3 Cats', () => {
      const commId = '567e7bb1-5f69-4b5d-a82f-7edec41bb081';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        title: 'Your next delivery for Cullen, Myles and Serena',
        message:
          "Hey Samanta! In two days' time, we'll be charging you for your next order for Cullen, Myles and Serena's fresh food.",
      });
    });
  });
});
