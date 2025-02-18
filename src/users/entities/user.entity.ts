import { Field, Int, ObjectType } from '@nestjs/graphql';

/**
 * Represents a `User` object type in the GraphQL schema.
 * This class defines the structure and fields of a `User` as it will be
 * exposed through the GraphQL API.
 *
 * @ObjectType - Decorator that marks this class as a GraphQL ObjectType.
 *  This makes the class available to be used in your GraphQL schema.
 */
@ObjectType()
export class User {
  /**
   * The unique identifier for the user.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL ObjectType.
   *  By default, `@Field()` infers the type from the TypeScript property type (string in this case).
   */
  @Field()
  userId: string;

  /**
   * The email address of the user.
   *
   * @Field - Decorator to expose 'email' as a GraphQL field.
   */
  @Field()
  email: string;

  /**
   * The age of the user.
   *
   * @Field - Decorator to expose 'age' as a GraphQL field.
   *  `() => Int` explicitly specifies that this field should be of GraphQL type `Int`.
   *  Even though TypeScript infers `number`, it's good practice to explicitly map to GraphQL scalar types.
   */
  @Field(() => Int)
  age: number;

  /**
   * Indicates whether the user is subscribed. This field is optional
   * and can be null.
   *
   * @Field - Decorator to expose 'isSubscribed' as a GraphQL field.
   *  `{ nullable: true }` option makes this field nullable in the GraphQL schema.
   *  This means a query for a `User` might return `null` for the `isSubscribed` field.
   */
  @Field({ nullable: true })
  isSubscribed: boolean;
}
