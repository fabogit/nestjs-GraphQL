import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

/**
 * Arguments type for fetching multiple users.
 * This `ArgsType` defines the structure for arguments accepted by GraphQL queries
 * that intend to retrieve a list of users based on their user IDs.
 * Using ArgsType is a convention in NestJS GraphQL to encapsulate query arguments into a class.
 *
 * @ArgsType - Decorator that marks this class as a GraphQL ArgsType.
 *  ArgsTypes are used to define a set of arguments for GraphQL queries and mutations,
 *  promoting reusability and organization of query parameters.
 */
@ArgsType()
export class GetUsersArgs {
  /**
   * An array of user IDs used to fetch specific users.
   * This field expects a list of strings, where each string is a unique identifier for a user.
   * The query will then retrieve users whose IDs are included in this array.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL ArgsType.
   *  `() => [String]` explicitly specifies that this field is a list (array) of GraphQL `String` scalar type.
   *  This ensures that the GraphQL schema correctly represents this argument as a list of strings.
   * @IsArray - Validator decorator that verifies if the provided value is an array.
   *  This ensures that the `userIds` argument is indeed an array, as expected by the query logic,
   *  and helps in validating the input data before processing the query.
   */
  @Field(() => [String])
  @IsArray()
  userIds: string[];
}
