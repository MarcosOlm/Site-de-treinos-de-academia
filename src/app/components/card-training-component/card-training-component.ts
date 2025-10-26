import { Component } from '@angular/core';

@Component({
  selector: 'app-card-training-component',
  imports: [],
  templateUrl: './card-training-component.html',
  styleUrl: './card-training-component.css',
})
export class CardTrainingComponent {
  titulo = 'Treino de Peito e Tríceps'
  tipoTreino = 'Superior'
  treinos = [{nome: 'Supino Reto', quant: '3 x 10'}, {nome: 'Supino Inclinado', quant: '3 x 10'}, {nome: 'Crucifixo', quant: '3 x 15'}, {nome: 'Tríceps Testa', quant: '4 x 10'}, {nome: 'Tríceps Corda', quant: '4 x 12'}]
  
}
