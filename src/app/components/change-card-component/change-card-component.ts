  import { Component, Input, OnInit } from '@angular/core';
  import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
  import { Card } from '../../interface/Card';
  import { CardService } from '../../services/card-service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-change-card-component',
    imports: [ReactiveFormsModule],
    templateUrl: './change-card-component.html',
    styleUrl: './change-card-component.css',
  })
  export class ChangeCardComponent implements OnInit{
    @Input("dayOfWeek") dayOfWeek!: String
    form!: FormGroup
    quantTreinos: number = 0
    isDeleteMode: boolean = false
    method: String = 'create'
    id: number = 0

    constructor(private fb: FormBuilder, private cardService: CardService, private route: Router) {}
    
    ngOnInit(): void {
      this.checkDay()
      this.setupForm()
    }
    
    async onSubmit(){
      const card = this.form.value as Card
      card.id = this.id
      console.log(card)
      if (this.method == 'create') {
        await this.cardService.creatCard(card)
        this.goHome()
      } 
      else if (this.method == 'update') {
        await this.cardService.updateCard(this.id, card)
        this.goHome()
      }
      else if (this.method == 'delete') {
        await this.cardService.deleteCard(this.id)
        this.goHome()
      }
    }
    
    setupForm() {
      this.form = this.fb.group({
        titulo: [],
        tipoTreino: [],
        treinos: this.fb.array([])
      })
    }

    increaseTreino() {
      if (this.quantTreinos < 5) {
        this.quantTreinos++
        this.addTreino()
      }
    }

    decreaseTreinos() {
      if(this.quantTreinos > 1) {
        this.quantTreinos--
        this.removeTreino(this.treino.length -1)
      }
    }

    isDeleteModeChange(event: any) {
      if (event.target.value == 'delete') {
        this.isDeleteMode = true
      }
      else {
        this.isDeleteMode = false
      }
      this.method = event.target.value
    }
    
    addTreino() {
      const newTreinoList = this.fb.group({
        nome: [''],
        quant: ['']
      })
      
      this.treino.push(newTreinoList)
    }
    
    removeTreino(index: number) {
      this.treino.removeAt(index)
    }
    
    goHome() {
      this.route.navigate(['/'])
    }
    
    get treino() {
      return this.form.get('treinos') as FormArray
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
