import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

/**
 * Input type for deleting a user.
 * This `InputType` defines the required data structure for deleting a user.
 * It necessitates the user's ID to uniquely identify the user to be removed.
 *
 * @InputType - Decorator that marks this class as a GraphQL InputType.
 *  InputTypes are specifically designed to structure input data for GraphQL mutations and queries.
 */
@InputType()
export class DeleteUserInput {
  /**
   * The unique identifier of the user to be deleted.
   * This field is mandatory and is used to pinpoint the specific user for deletion.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL InputType.
   *  By default, `@Field()` infers the GraphQL type from the TypeScript property type (string in this case).
   * @IsNotEmpty - Validator decorator ensuring that this field cannot be empty.
   *  It enforces that a valid `userId` must be provided when using this InputType in a delete user operation.
   */
  @Field()
  @IsNotEmpty()
  userId: string;
}
