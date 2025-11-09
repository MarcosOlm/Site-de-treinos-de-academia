import { Component, OnInit } from '@angular/core';
import { LoginRegistrationComponent } from '../../components/login-registration-component/login-registration-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-registration',
  imports: [LoginRegistrationComponent],
  templateUrl: './login-registration.html',
  styleUrl: './login-registration.css',
})
export class LoginRegistration implements OnInit{
  user!: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.user = this.route.snapshot.paramMap.get('user') || '';
  }
}
