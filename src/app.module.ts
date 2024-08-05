import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommsModule } from './comms/comms.module';
import { ProductsModule } from './products/products.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [UsersModule, CommsModule, ProductsModule, SubscriptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
