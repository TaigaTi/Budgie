import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.scss'
})
export class DashboardCard {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() amount!: CurrencyPipe;
  @Input() detail!: string;
}
