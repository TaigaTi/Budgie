import { Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from 'src/dtos/updateCategoryDto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCategoryById(id: string) {
    const categoryId = parseInt(id);

    return await this.prismaService.category.findUnique({
      where: { id: categoryId },
    });
  }

  async updateCategory(
    categoryId: number,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.prismaService.category.update({
      where: { id: categoryId },
      data: {
        ...updateCategoryDto,
      },
    });
  }

  async deleteCategory(categoryId: number) {
    return await this.prismaService.category.delete({
      where: { id: categoryId },
    });
  }
}
