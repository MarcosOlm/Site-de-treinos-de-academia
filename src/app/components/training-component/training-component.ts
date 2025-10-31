import { Component } from '@angular/core';
import { CardTrainingComponent } from '../card-training-component/card-training-component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-training-component',
  imports: [CardTrainingComponent, RouterModule],
  templateUrl: './training-component.html',
  styleUrl: './training-component.css',
})
export class TrainingComponent {
  day: String = 'Segunda';
  ativo: number = 0;

  bntDayOfWeek(day: number) {
    switch (day) {
      case 0:
        this.day = 'Segunda';
        this.ativo = 0;
        break;
      case 1:
        this.day = 'Terça';
        this.ativo = 1;
        break;
      case 2:
        this.day = 'Quarta';
        this.ativo = 2;
        break;
      case 3:
        this.day = 'Quinta';
        this.ativo = 3;
        break;
      case 4:
        this.day = 'Sexta';
        this.ativo = 4;
        break;
      case 5:
        this.day = 'Sábado';
        this.ativo = 5;
        break;
      case 6: 
        this.day = 'Domingo';
        this.ativo = 6;
        break;
    }
  }
}
