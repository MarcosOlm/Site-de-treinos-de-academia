import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {
  imagens = ['gym-hero-1.jpg', 'gym-hero-2.jpg', 'gym-hero-3.jpg']
  indiceAtual = 0
  intervalo: any

  ngOnInit() {
    this.nextSlide()
  }

  before() {
    this.indiceAtual = this.indiceAtual <= 0 ? 2 : this.indiceAtual -1
    clearInterval(this.intervalo)
    this.nextSlide()
  }
  after() {
    this.indiceAtual = this.indiceAtual >= this.imagens.length -1 ? 0 : this.indiceAtual +1
    clearInterval(this.intervalo)
    this.nextSlide()
  }

  bntNav(e: number) {
    this.indiceAtual = e
    clearInterval(this.intervalo)
    this.nextSlide()
  }

  nextSlide() {
    this.intervalo = setInterval(this.after.bind(this), 3000)
  }
}
