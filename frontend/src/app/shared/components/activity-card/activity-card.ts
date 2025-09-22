import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  imports: [],
  templateUrl: './activity-card.html',
  styleUrl: './activity-card.scss'
})
export class ActivityCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() date!: string;
  @Input() amount!: string;
}
