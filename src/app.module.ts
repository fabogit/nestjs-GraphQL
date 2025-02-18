import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

/**
 * The root module of the NestJS application, `AppModule` orchestrates
 * and configures the application's features. It sets up GraphQL using
 * Apollo Driver and imports feature-specific modules like `UsersModule`.
 *
 * @Module - NestJS module decorator.
 *  Defines this class as a module and configures its imports, controllers, and providers.
 */
@Module({
  /**
   * Imports list declares other NestJS modules that are needed in this module.
   * Here, it imports `GraphQLModule` to enable GraphQL functionality and `UsersModule`
   * to include user-related features.
   *
   * - `GraphQLModule.forRoot<ApolloDriverConfig>(...)`: Configures the GraphQL module with Apollo Driver.
   *   - `driver: ApolloDriver`: Specifies Apollo Driver as the GraphQL driver. Apollo Driver is a performant
   *     GraphQL server adapter for NestJS built on top of Apollo Server.
   *   - `autoSchemaFile: true`: Enables automatic schema generation. NestJS will generate the GraphQL
   *     schema file (`schema.gql` by default) based on the GraphQL decorators used in the application.
   *   - `playground: true`: Enables the GraphQL Playground in development. GraphQL Playground is an interactive
   *     GraphQL IDE accessible in the browser at `/graphql` path (by default when `playground: true` and `debug: true` or in development mode).
   *
   * - `UsersModule`: Imports the UsersModule, integrating all user-related components (resolvers, services)
   *     into the application. This encapsulates user functionalities within the `AppModule`.
   */
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UsersModule,
  ],
  /**
   * Controllers array is for defining NestJS controllers. In this `AppModule`, no controllers
   * are directly defined, so it's an empty array. Controllers handle HTTP requests and are
   * typically used for REST APIs, which are not directly used when primarily serving a GraphQL API.
   */
  controllers: [],
  /**
   * Providers array declares services and other providers that this module instantiates
   * and that may be injected into controllers or services in this module or other modules
   * that import this module. Here, it is empty as the `AppModule` itself doesn't directly provide
   * any services that need to be injected elsewhere beyond what's already provided by imported modules.
   */
  providers: [],
})
export class AppModule {}
