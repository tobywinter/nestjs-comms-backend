import { Injectable } from '@nestjs/common';
import { YourNextDeliveryResponse } from './interfaces/comms.interface';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Injectable()
export class CommsService {
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private subscriptionsService: SubscriptionsService,
  ) {}

  private formatCatNames(cats: { name: string }[]): string {
    const catNames = cats.map((cat) => cat.name);

    if (catNames.length === 0) {
      return '';
    }

    if (catNames.length === 1) {
      return catNames[0];
    }

    if (catNames.length === 2) {
      return `${catNames[0]} and ${catNames[1]}`;
    }

    const lastCatName = catNames.pop();
    const formattedCatNames = catNames.join(', ');
    return `${formattedCatNames} and ${lastCatName}`;
  }

  private formatNextDeliveryMessage(user: {
    firstName: string;
    cats: { name: string }[];
  }): string {
    return `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${this.formatCatNames(user.cats)}'s fresh food.`;
  }

  yourNextDelivery(id: string): YourNextDeliveryResponse {
    const user = this.usersService.findOne(id);
    const activeSubscriptions =
      this.subscriptionsService.getActiveSubscriptions(user);
    const totalPrice = activeSubscriptions.reduce((acc, subscription) => {
      const product = this.productsService.findOne(subscription.pouchSize);
      return acc + product.price.amount;
    }, 0);

    if (user) {
      return {
        title:
          'Your next delivery for ' + this.formatCatNames(activeSubscriptions),
        message: this.formatNextDeliveryMessage({
          ...user,
          cats: activeSubscriptions,
        }),
        totalPrice: totalPrice,
        freeGift: totalPrice > 120,
      };
    }

    throw new Error(`User with ID ${id} not found`);
  }
}
