import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-hearder-component',
  imports: [RouterModule],
  templateUrl: './hearder-component.html',
  styleUrl: './hearder-component.css',
})
export class HearderComponent implements OnInit{
  typeUser: String = ''

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.typeUser = this.userService.getTypeUser()
  }
}
