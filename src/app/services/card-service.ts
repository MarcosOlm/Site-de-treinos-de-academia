import { Injectable } from '@angular/core';
import { Card } from '../interface/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = 'http://localhost:8080/treinos'
  
  async getCards() {
    const cards = await fetch(this.url)
    const card = cards.json()
    return card
  }

  async getCardById(id:number) {
    const cards = await fetch(this.url.concat(`/${id}`))
    const card = cards.json()
    return card
  }

  async creatCard(newCard: Card) {
    const cards = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
    const card = cards.json()
    return card
  }

  async updateCard(id: number, newCard: Card) {
    const idCard = this.url.concat(`/${id}`)
    const cards = await fetch(idCard, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
    const card = cards.json()
    return card
  }

  async deleteCard(id: number) {
    const idCard = this.url.concat(`/${id}`)
    const cards = await fetch(idCard, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return 
  }
}
