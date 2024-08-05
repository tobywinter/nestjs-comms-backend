import { Injectable } from '@nestjs/common';
import { Cat, User } from '../users/interfaces/user.interface';

@Injectable()
export class SubscriptionsService {
  getActiveSubscriptions(user: User): Cat[] {
    return user.cats.filter((cat) => cat.subscriptionActive);
  }
}
