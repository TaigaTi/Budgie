import { TransactionType } from '.prisma/client/default.js';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTransactionSummary(id: string) {
    const userId = parseInt(id);

    return await this.prismaService.transaction.groupBy({
      by: ['Categoryid'],
      where: { userId: userId },
      _sum: { amount: true },
      orderBy: { _sum: { amount: 'desc' } },
    });
  }

  async createTransaction() {
    return await this.prismaService.transaction.create({
      data: {
        title: 'Sample Transaction',
        type: TransactionType.EXPENSE,
        amount: 100,
        date: new Date(),
        description: 'Sample Transaction',
        Categoryid: 1,
        userId: 1,
      },
    });
  }
}
