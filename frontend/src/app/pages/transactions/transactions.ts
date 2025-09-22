import { Component } from '@angular/core';
import { ActivityCard } from '../../shared/components/activity-card/activity-card';
import { Transaction, UserTransactions } from '../../services/user-transactions/user-transactions';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transactions',
  imports: [ActivityCard, CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  transactions: Transaction[] = [];

  constructor(private userTransactionService: UserTransactions) {}

  ngOnInit() {
    try {
      this.userTransactionService.getTransactions().subscribe((data) => {
        this.transactions = data;
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }
}
