import { Injectable } from '@angular/core';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User = {
    nome: '',
    email: '',
    senha: '',
    tipo: ''
  }

  getTypeUser() {
    return this.user.tipo
  }

  createUser(newUser: User) {
    if (newUser.tipo != 'Aluno' && newUser.tipo != 'Personal') {
      return null
    }
    this.user.nome = newUser.nome
    this.user.email = newUser.email
    this.user.senha = newUser.senha
    this.user.tipo = newUser.tipo
    return newUser
  }
}
