import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

/**
 * Input type for creating a new user.
 * This `InputType` defines the data structure required when creating a new user.
 * It specifies the fields that are necessary to provide for user creation,
 * such as email and age, and applies validation rules to ensure data integrity.
 *
 * @InputType - Decorator that marks this class as a GraphQL InputType.
 *  GraphQL InputTypes are used to define the structure of input objects
 *  in mutations and queries, allowing for structured and validated input data.
 */
@InputType()
export class CreateUserInput {
  /**
   * The email address of the new user.
   * This field is mandatory and must be a valid email format.
   *
   * @Field - Decorator that exposes this property as a field in the GraphQL InputType.
   *  By default, `@Field()` infers the GraphQL type from the TypeScript property type (string in this case).
   * @IsNotEmpty - Validator decorator ensuring that this field cannot be empty.
   *  It enforces that an email address must be provided when creating a new user.
   * @IsEmail - Validator decorator that validates whether the provided value is a valid email address.
   *  This ensures that the email field adheres to a standard email format.
   */
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * The age of the new user.
   * This field is also mandatory and represents the user's age as a number.
   *
   * @Field - Decorator to expose 'age' as a GraphQL field.
   *  Although not explicitly defined with `() => Int`, if the TypeScript type is `number` and no explicit GraphQL type is given,
   *  NestJS/graphql will typically infer a suitable GraphQL scalar type (like `Int` or `Float` based on context).
   *  It's good practice for clarity to explicitly define scalar types like `@Field(() => Int)` if you intend a specific GraphQL scalar type.
   * @IsNotEmpty - Validator decorator ensuring that this field cannot be empty.
   *  It enforces that an age must be provided when creating a new user. In practice with Javascript, it checks against `null` and `undefined` and empty strings.
   */
  @Field()
  @IsNotEmpty()
  age: number;
}
