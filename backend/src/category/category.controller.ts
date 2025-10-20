import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get('')
  async getCategories() {
    return await this.prismaService.category.findMany();
  }

  @Get('/:id')
  async getCategoryById(@Param('id') id: string) {
    return await this.categoryService.getCategoryById(id);
  }
}
