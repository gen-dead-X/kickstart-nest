import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  async removeCat(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Cat> {
    return this.catService.remove(id);
  }
}
