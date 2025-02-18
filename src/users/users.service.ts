import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';

/**
 * Injectable service responsible for managing users.
 */
@Injectable()
export class UsersService {
  /**
   * In-memory storage for users.
   * @private
   * @type {User[]}
   */
  private users: User[] = [];

  /**
   * Creates a new user.
   *
   * @param {CreateUserInput} createUserData - Data for creating a new user.
   * @returns {User} The newly created user.
   */
  create(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      isSubscribed: false,
      ...createUserData,
    };
    this.users.push(user);
    return user;
  }

  /**
   * Finds a user by their user ID.
   *
   * @param {GetUserArgs} getUserArgs - Arguments containing the user ID to search for.
   * @returns {User} The user found with the provided ID.
   * @throws {NotFoundException} If no user is found with the given ID.
   */
  findOne(getUserArgs: GetUserArgs): User {
    const user = this.users.find((user) => user.userId === getUserArgs.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  /**
   * Finds multiple users by an array of user IDs.
   *
   * @param {GetUsersArgs} getUsersArgs - Arguments containing an array of user IDs to search for.
   * @returns {User[]} An array of users found for the provided IDs.
   * @throws {NotFoundException} If any user ID in the input array does not correspond to an existing user.  (Note: As currently implemented, it will throw if *any* findOne call fails)
   */
  findAll(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.findOne({ userId }));
  }

  /**
   * Updates an existing user's information.
   *
   * @param {UpdateUserInput} updateUserData - Data containing the user ID and fields to update.
   * @returns {User} The updated user.
   * @throws {NotFoundException} If no user is found with the given ID.
   */
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

  /**
   * Removes a user by their user ID.
   *
   * @param {DeleteUserInput} deleteUserData - Arguments containing the user ID of the user to remove.
   * @returns {User} The user that was removed.
   */
  remove(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return user;
  }
}
