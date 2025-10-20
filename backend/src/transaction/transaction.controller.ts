import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { PrismaService } from 'src/prisma/prisma.service';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('')
  async getAllTransactions() {
    return await this.prisma.transaction.findMany();
  }

  @Get('/:id')
  async getTransactionById(@Param('id') id: string) {
    return await this.prisma.transaction.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Post('/new')
  async createTransaction() {
    return await this.transactionService.createTransaction();
  }

  @Get('/:id/summary')
  async getTransactionSummary(@Param('id') id: string) {
    return await this.transactionService.getTransactionSummary(id);
  }
}
