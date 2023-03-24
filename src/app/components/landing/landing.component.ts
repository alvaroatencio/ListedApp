import { Component } from '@angular/core';
import { UsersContainerComponent } from './users-container/users-container.component';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  usersContainer = UsersContainerComponent;
}
