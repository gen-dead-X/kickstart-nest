import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
