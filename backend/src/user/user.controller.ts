import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('')
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Get(':id/transactions')
  async getUserTransactions(@Param('id') id: string) {
    const userId = parseInt(id);
    return await this.prisma.transaction.findMany({
      where: { userId: userId },
    });
  }
}
