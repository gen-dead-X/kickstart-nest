import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cat, CreateCatInput } from './dto/cat.dto';

@Injectable()
export class CatService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCatInput: CreateCatInput): Promise<Cat> {
    return this.prisma.cat.create({
      data: createCatInput,
    }) as unknown as Cat;
  }

  async findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany() as unknown as Cat[];
  }

  async findOne(id: string): Promise<Cat> {
    return this.prisma.cat.findUnique({
      where: { id },
    }) as unknown as Cat;
  }

  async remove(id: string): Promise<Cat> {
    return this.prisma.cat.delete({
      where: { id },
    }) as unknown as Cat;
  }
}
