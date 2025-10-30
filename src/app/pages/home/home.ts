import { Component } from '@angular/core';
import { HearderComponent } from '../../components/hearder-component/hearder-component';
import { CarouselComponent } from '../../components/carousel-component/carousel-component';
import { TrainingComponent } from '../../components/training-component/training-component';
import { FooterComponent } from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-home',
  imports: [HearderComponent, CarouselComponent, TrainingComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
