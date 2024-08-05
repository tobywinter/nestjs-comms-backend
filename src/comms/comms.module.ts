import { Module } from '@nestjs/common';
import { CommsService } from './comms.service';
import { CommsController } from './comms.controller';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}
