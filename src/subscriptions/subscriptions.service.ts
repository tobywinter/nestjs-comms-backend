import { Injectable } from '@nestjs/common';
import { Cat, User } from '../users/interfaces/user.interface';
import { Money } from 'src/products/interfaces/products.interface';
import { ProductsService } from '../products/products.service';

@Injectable()
export class SubscriptionsService {
  constructor(private productsService: ProductsService) {}

  getActiveSubscriptions(user: User): Cat[] {
    return user.cats.filter((cat) => cat.subscriptionActive);
  }

  getMonthlyReccuringPrice(user: User): Money {
    const activeSubscriptions = this.getActiveSubscriptions(user);
    const totalPrice = activeSubscriptions.reduce((acc, subscription) => {
      const product = this.productsService.findOne(subscription.pouchSize);
      return acc + product.price.amount;
    }, 0);
    return { amount: totalPrice, currency: 'GBP' };
  }
}
