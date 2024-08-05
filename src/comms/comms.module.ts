import { Module } from '@nestjs/common';
import { CommsService } from './comms.service';
import { CommsController } from './comms.controller';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';

@Module({
  imports: [UsersModule, ProductsModule, SubscriptionsModule],
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}
