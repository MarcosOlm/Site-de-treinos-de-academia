import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interface/User';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registration-component',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-registration-component.html',
  styleUrl: './login-registration-component.css',
})

export class LoginRegistrationComponent implements OnInit{
  form!: FormGroup
  isLoginMode = true
  @Input('user') user!: String;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {}

  ngOnInit(): void {
      this.setupForm()
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid){
      let NewUser: User = this.form.value as User;
      NewUser = {...NewUser, tipo: this.user}
      this.userService.createUser(NewUser)
      this.goHome()
    }
  }

  setupForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  loginMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  goHome() {
    this.route.navigate(['/'])
  }
}
