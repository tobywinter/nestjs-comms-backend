import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a user when provided a valid id', () => {
      const userId = '618f4ed6-1c5b-4993-a149-f64700bf31dd';
      expect(service.findOne(userId)).toStrictEqual({
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
        ],
      });
    });

    it('should throw an error when provided an invalid id', () => {
      const userId = 'invalid-id';
      expect(() => service.findOne(userId)).toThrow(
        `User with ID ${userId} not found`,
      );
    });
  });
});
