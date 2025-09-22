import { Component } from '@angular/core';
import { DashboardCard } from '../../shared/components/dashboard-card/dashboard-card';
import { ActivityCard } from '../../shared/components/activity-card/activity-card';
import { Transaction, UserTransactions } from '../../services/user-transactions/user-transactions';
import { count } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ActivityCard, CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  transactions: Transaction[] = [];
  transactionSummary = { total: 0, income: 0, expense: 0, count: 0 };

  constructor(private userTransactionService: UserTransactions) {}

  ngOnInit() {
    try {
      this.userTransactionService.getTransactions().subscribe((data) => {
        console.log('User Transactions:', data);
        this.transactions = data;
      });

      this.userTransactionService.getTransactionSummary().subscribe((summary) => {
        console.log('Transaction Summary:', summary);
        this.transactionSummary = summary;
      });
    } catch (error) {
      console.error('Error fetching user transactions:', error);
    }
  }
}
