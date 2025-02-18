import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

/**
 * Input type for updating user information.
 * This `InputType` defines the data structure expected when updating an existing user.
 * It includes the user's ID to identify the user to be updated, and optional fields
 * for properties that can be modified.
 *
 * @InputType - Decorator that marks this class as a GraphQL InputType.
 *  InputTypes are used for defining the structure of input data in mutations and queries.
 */
@InputType()
export class UpdateUserInput {
  /**
   * The unique identifier of the user to be updated.
   * This field is required to identify the target user for the update operation.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL InputType.
   *  By default, `@Field()` infers the type from the TypeScript property type (string in this case).
   * @IsNotEmpty - Validator decorator that ensures this field is not empty.
   *  This means the userId must be provided when using this InputType in a mutation.
   */
  @Field()
  @IsNotEmpty()
  userId: string;

  /**
   * The new age for the user. This field is optional; if provided, the user's age will be updated.
   * If not provided, the age will remain unchanged.
   *
   * @Field - Decorator to expose 'age' as a GraphQL field.
   *  `{ nullable: true }` option makes this field nullable in the GraphQL schema, implying it's optional from a GraphQL perspective.
   * @IsOptional - Validator decorator that marks this field as optional.
   *  This allows the 'age' field to be omitted in the input without validation errors.
   * @IsNotEmpty - Validator decorator that ensures this field is not empty *if* it is provided.
   *  This means if 'age' is included in the input, it cannot be an empty value (e.g., empty string, though type is number).
   * @Type - Although not explicitly shown, NestJS/graphql implicitly uses `class-transformer` based on the field type.
   *  For numeric types, it handles type coercion from string (from GraphQL input) to number.
   */
  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  /**
   * The new subscription status for the user. This field is optional; if provided, the user's subscription status will be updated.
   * If not provided, the subscription status will remain unchanged.
   *
   * @Field - Decorator to expose 'isSubscribed' as a GraphQL field.
   *  `{ nullable: true }` option makes this field nullable in the GraphQL schema.
   * @IsOptional - Validator decorator that marks this field as optional.
   *  This allows the 'isSubscribed' field to be omitted in the input.
   */
  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}
