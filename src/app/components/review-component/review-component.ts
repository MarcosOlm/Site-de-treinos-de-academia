import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-component',
  imports: [],
  templateUrl: './review-component.html',
  styleUrl: './review-component.css',
})
export class ReviewComponent {

  constructor(private route: Router) {}

  goHome() {
    this.route.navigate(['/'])
  }
}
