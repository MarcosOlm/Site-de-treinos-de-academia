import { Component, OnInit } from '@angular/core';
import { CardTrainingComponent } from '../../components/card-training-component/card-training-component';
import { ReviewComponent } from '../../components/review-component/review-component';
import { ActivatedRoute } from '@angular/router';
import { ChangeCardComponent } from '../../components/change-card-component/change-card-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout',
  imports: [CardTrainingComponent, ReviewComponent, ChangeCardComponent, CommonModule],
  templateUrl: './workout.html',
  styleUrl: './workout.css',
})

export class Workout implements OnInit{
  day!: String;
  userType!: String;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.day = this.route.snapshot.paramMap.get('day') || '';
      this.userType = this.route.snapshot.paramMap.get('user') || '';
  }
}
