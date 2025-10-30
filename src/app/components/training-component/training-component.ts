import { Component } from '@angular/core';
import { CardTrainingComponent } from '../card-training-component/card-training-component';

@Component({
  selector: 'app-training-component',
  imports: [CardTrainingComponent],
  templateUrl: './training-component.html',
  styleUrl: './training-component.css',
})
export class TrainingComponent {
  day: String = 'Segunda';

  bntDayOfWeek(day: String) {
    this.day = day;
  }
}
