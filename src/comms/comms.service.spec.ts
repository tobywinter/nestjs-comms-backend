import { Test, TestingModule } from '@nestjs/testing';
import { CommsService } from './comms.service';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

describe('CommsService', () => {
  let service: CommsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommsService,
        UsersService,
        ProductsService,
        SubscriptionsService,
      ],
    }).compile();

    service = module.get<CommsService>(CommsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When provided a valid id', () => {
    it('should return a comm for a user with a single Cat with active subscription', () => {
      const commId = '618f4ed6-1c5b-4993-a149-f64700bf31dd';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        title: 'Your next delivery for Betsy',
        message:
          "Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.",
        totalPrice: 69.0,
        freeGift: false,
      });
    });

    it('should return a comm for a user with 2 Cats with active subscription', () => {
      const commId = '62d98190-6837-4485-9ee3-dc1367cf0f28';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        title: 'Your next delivery for Aurelio and Idella',
        message:
          "Hey Camila! In two days' time, we'll be charging you for your next order for Aurelio and Idella's fresh food.",
        totalPrice: 137.25,
        freeGift: true,
      });
    });

    it('should return a comm for a user with 3 Cats with active subscription', () => {
      const commId = 'ea17433d-7527-45a5-acbc-2e2f78f95c6e';
      expect(service.yourNextDelivery(commId)).toStrictEqual({
        message:
          "Hey Santiago! In two days' time, we'll be charging you for your next order for Cristina, Mariah and Rebekah's fresh food.",
        title: 'Your next delivery for Cristina, Mariah and Rebekah',
        totalPrice: 197.5,
        freeGift: true,
      });
    });
  });
});
