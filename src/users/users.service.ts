import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './entities/user.entity';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      isSubscribed: false,
      ...createUserData,
    };
    this.users.push(user);
    return user;
  }

  findOne(getUserArgs: GetUserArgs): User {
    const user = this.users.find((user) => user.userId === getUserArgs.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  findAll(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.findOne({ userId }));
  }

  update(updateUserData: UpdateUserInput) {
    const user = this.users.find(
      (user) => user.userId === updateUserData.userId,
    );
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserData);
    return user;
  }

  remove(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
