import { Component } from '@angular/core';
import { DashboardCard } from '../../shared/components/dashboard-card/dashboard-card';
import { ActivityCard } from '../../shared/components/activity-card/activity-card';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ActivityCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
