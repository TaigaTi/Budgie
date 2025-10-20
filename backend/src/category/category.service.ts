import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getCategoryById(id: string) {
    const categoryId = parseInt(id);

    return await this.prismaService.category.findUnique({
      where: { id: categoryId },
    });
  }
}
