import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';

/**
 * Resolves user related GraphQL queries and mutations.
 * @Resolver User - Resolves fields of the User object type.
 */
@Resolver(() => User)
export class UsersResolver {
  /**
   * Constructor for UsersResolver.
   * @param {UsersService} usersService - Injectable UsersService for handling user data logic.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Mutation to create a new user.
   * @Mutation User - Defines this method as a GraphQL mutation returning a User object.
   * @param {CreateUserInput} createUserData - Data for creating a new user, obtained from GraphQL arguments.
   * @returns {User} The newly created user.
   */
  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.create(createUserData);
  }

  /**
   * Query to find a single user by arguments.
   * @Query User - Defines this method as a GraphQL query returning a User object.
   * @param {GetUserArgs} getUserArgs - Arguments to specify which user to find.
   * @returns {User} The found user, or null if no user is found (due to `nullable: true`).
   */
  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.findOne(getUserArgs);
  }

  /**
   * Query to find multiple users by arguments.
   * @Query User[] - Defines this method as a GraphQL query returning an array of User objects.
   * @param {GetUsersArgs} getUsersArgs - Arguments to specify which users to find (e.g., by userIds).
   * @returns {User[]} An array of users found based on the provided arguments. Could be an empty array, or `null` if `nullable: 'items'` implies the whole list can be null.
   */
  @Query(() => [User], { name: 'users', nullable: 'items' })
  findAll(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.findAll(getUsersArgs);
  }

  /**
   * Mutation to update an existing user.
   * @Mutation User - Defines this method as a GraphQL mutation returning a User object.
   * @param {UpdateUserInput} updateUserData - Data for updating an existing user, including the user ID and fields to update.
   * @returns {User} The updated user.
   */
  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.update(updateUserData);
  }

  /**
   * Mutation to remove a user.
   * @Mutation User - Defines this method as a GraphQL mutation returning a User object.
   * @param {DeleteUserInput} deleteUserData - Data to specify which user to delete (by userId).
   * @returns {User} The user that was removed.
   */
  @Mutation(() => User, { name: 'deleteUser' })
  removeUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.usersService.remove(deleteUserData);
  }
}
