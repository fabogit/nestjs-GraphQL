import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

/**
 * The UsersModule is a NestJS module responsible for encapsulating
 * all user-related functionalities. It declares the providers
 * (services and resolvers) that are part of the `Users` feature set.
 */
@Module({
  /**
   * Providers are components that can be injected into other components
   * within this module or other modules if exported. Here, it declares
   * the `UsersResolver` and `UsersService` as providers within the
   * UsersModule.
   *
   * - `UsersResolver`: Handles GraphQL requests related to users.
   * - `UsersService`:  Provides the business logic for user operations.
   */
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
