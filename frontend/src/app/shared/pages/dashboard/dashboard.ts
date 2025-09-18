import { Component } from '@angular/core';
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { ActivityCard } from "../../components/activity-card/activity-card";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ActivityCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
