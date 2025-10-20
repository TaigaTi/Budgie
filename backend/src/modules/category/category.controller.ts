import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from 'src/dtos/updateCategoryDto';

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

  @Put('/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const categoryId = parseInt(id);

    await this.categoryService.updateCategory(categoryId, updateCategoryDto);
  }
}
