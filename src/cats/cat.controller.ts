import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat, CreateCatInput } from './dto/cat.dto';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Mutation(() => Cat)
  async createCat(
    @Args('createCatInput') createCatInput: CreateCatInput,
  ): Promise<Cat> {
    return this.catService.create(createCatInput);
  }

  @Query(() => [Cat], { name: 'cats' })
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Query(() => Cat, { name: 'cat' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  async removeCat(@Args('id', { type: () => Int }) id: number): Promise<Cat> {
    return this.catService.remove(id);
  }
}
