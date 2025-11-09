import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { CardService } from '../../services/card-service';
import { Card } from '../../interface/Card';
import { UserService } from '../../services/user-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-training-component',
  imports: [RouterModule],
  templateUrl: './card-training-component.html',
  styleUrl: './card-training-component.css',
})
export class CardTrainingComponent implements OnInit, OnChanges {
  @Input("dayOfWeek") dayOfWeek!: String
  cardNow: Card = {
    id: 0,
    titulo: '',
    tipoTreino: '',
    treinos: []
  }
  id: number = 0
  userType: String = ''

  constructor(private cardService: CardService, private user:UserService) {}

  ngOnInit(): void {
    this.userType = this.user.getTypeUser()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dayOfWeek']) {
      this.checkDay();
      this.card();
    }
  }


  async card() {
    const card = await this.cardService.getCardById(this.id)
    this.cardNow.titulo = card.titulo
    this.cardNow.tipoTreino = card.tipoTreino
    this.cardNow.treinos = card.treinos
  }

  checkDay() {
    switch (this.dayOfWeek) {
      case 'Segunda':
        this.id = 1
        break;
      case 'Terça':
        this.id = 2
        break;
      case 'Quarta':
        this.id = 3
        break;
      case 'Quinta':
        this.id = 4
        break;
      case 'Sexta':
        this.id = 5
        break;
      case 'Sábado':
        this.id = 6
        break;
      case 'Domingo':
        this.id = 7
        break;
    }
  }
}
