import { Component } from '@angular/core';
import { DashboardCard } from '../../shared/components/dashboard-card/dashboard-card';
import { ActivityCard } from '../../shared/components/activity-card/activity-card';
import { UserTransactions } from '../../services/user-transactions/user-transactions';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ActivityCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(private userTransactionService: UserTransactions) {}

  ngOnInit() {
    try {
      this.userTransactionService.getTransactions().subscribe((data) => {
        console.log('User Transactions:', data);
      });
    } catch (error) {
      console.error('Error fetching user transactions:', error);
    }
  }
}
