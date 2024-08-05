import { Injectable } from '@nestjs/common';

import * as USER_DATA from '../../data.json';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = USER_DATA;

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }
}
