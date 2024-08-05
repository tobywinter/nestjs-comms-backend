import { Test, TestingModule } from '@nestjs/testing';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';

describe('CommsController', () => {
  let controller: CommsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommsController],
      providers: [CommsService, UsersService, ProductsService],
    }).compile();

    controller = module.get<CommsController>(CommsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
