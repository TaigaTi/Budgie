import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@ApiTags('Transactions')
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

  @Post('')
  async createTransaction() {
    return await this.transactionService.createTransaction();
  }

  @Get('/:id')
  async getTransactionById(@Param('id') id: string) {
    return await this.prisma.transaction.findUnique({
      where: { id: parseInt(id) },
    });
  }

  @Put('/:id')
  async updateTransaction(@Param('id') id: string) {
    return await this.transactionService.updateTransaction(id);
  }

  @Delete('/:id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.deleteTransaction(id);
  }

  @Get('/:id/summary')
  async getTransactionSummary(@Param('id') id: string) {
    return await this.transactionService.getTransactionSummary(id);
  }
}
