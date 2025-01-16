import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CreateCatInput } from './dto/cat.dto';
import { Cat } from './models/cat.model'; // Adjust the import path as necessary

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Mutation(() => Cat)
  async create(
    @Args('createCatInput') createCatInput: CreateCatInput,
  ): Promise<Cat> {
    return this.catService.create(createCatInput);
  }

  @Query(() => [Cat])
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Query(() => Cat)
  async findOne(@Args('id') id: number): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  async remove(@Args('id') id: number): Promise<Cat> {
    return this.catService.remove(id);
  }
}
