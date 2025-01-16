import { Field, ObjectType, InputType, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  breed: string;
}

@InputType()
export class CreateCatInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  breed: string;
}
