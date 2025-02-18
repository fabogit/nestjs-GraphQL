import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

/**
 * Arguments type for fetching a single user.
 * This `ArgsType` is used to define the expected arguments for GraphQL queries
 * that aim to retrieve a specific user based on their unique identifier.
 * Encapsulating arguments in an ArgsType enhances code organization and reusability.
 *
 * @ArgsType - Decorator that marks this class as a GraphQL ArgsType.
 *  ArgsTypes are a way to group arguments for GraphQL queries and mutations,
 *  making it easier to manage and validate input parameters.
 */
@ArgsType()
export class GetUserArgs {
  /**
   * The unique identifier of the user to be retrieved.
   * This field is essential for identifying the specific user that the query should fetch.
   * It is expected to be a non-empty string representing the user's ID.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL ArgsType.
   *  By default, `@Field()` infers the GraphQL type from the TypeScript property type (string in this case).
   * @IsNotEmpty - Validator decorator ensuring that this field is not empty.
   *  It validates that a `userId` is provided in the query arguments, enforcing that the ID is mandatory
   *  for fetching a user. This helps prevent queries without the necessary identification.
   */
  @Field()
  @IsNotEmpty()
  userId: string;
}
