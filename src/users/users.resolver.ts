import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.create(createUserData);
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.findOne(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  findAll(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.findAll(getUsersArgs);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.update(updateUserData);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  removeUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.usersService.remove(deleteUserData);
  }
}
