import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: string="";
  password: string="";
  rememberMe: boolean=false;
  showPassword: boolean=false;

  constructor() {
    this.showPassword = false;
  }

  login() {
    // Aquí iría la lógica de autenticación
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
