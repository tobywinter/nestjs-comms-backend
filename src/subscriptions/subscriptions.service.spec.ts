import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionsService } from './subscriptions.service';
import { User } from '../users/interfaces/user.interface';

describe('SubscriptionsService', () => {
  let service: SubscriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionsService],
    }).compile();

    service = module.get<SubscriptionsService>(SubscriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getActiveSubscriptions', () => {
    it('should return one active subscription when there is only one active', () => {
      const user: User = {
        id: '618f4ed6-1c5b-4993-a149-f64700bf31dd',
        firstName: 'Cordell',
        lastName: 'Koepp-Torphy',
        email: 'Cordell.Koepp-Torphy23@hotmail.com',
        cats: [
          {
            name: 'Betsy',
            subscriptionActive: true,
            breed: 'Savannah',
            pouchSize: 'E',
          },
          {
            name: 'Fern',
            subscriptionActive: false,
            breed: 'Savannah',
            pouchSize: 'E',
          },
        ],
      };

      expect(service.getActiveSubscriptions(user)).toStrictEqual([
        {
          name: 'Betsy',
          subscriptionActive: true,
          breed: 'Savannah',
          pouchSize: 'E',
        },
      ]);
    });

    it('should return two active subscription when there are two active', () => {
      const user: User = {
        id: '618f4ed6-1c5b-4993-a149-f64700bf31dd',
        firstName: 'Cordell',
        lastName: 'Koepp-Torphy',
        email: 'Cordell.Koepp-Torphy23@hotmail.com',
        cats: [
          {
            name: 'Betsy',
            subscriptionActive: true,
            breed: 'Savannah',
            pouchSize: 'E',
          },
          {
            name: 'Fern',
            subscriptionActive: true,
            breed: 'Savannah',
            pouchSize: 'E',
          },
        ],
      };

      expect(service.getActiveSubscriptions(user)).toStrictEqual([
        {
          name: 'Betsy',
          subscriptionActive: true,
          breed: 'Savannah',
          pouchSize: 'E',
        },
        {
          name: 'Fern',
          subscriptionActive: true,
          breed: 'Savannah',
          pouchSize: 'E',
        },
      ]);
    });
  });
});
