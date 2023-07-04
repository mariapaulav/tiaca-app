import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail!: string;
  showPassword!:boolean;
  showSecondSection: boolean = false;

  continuar(email: string) {
    this.userEmail = email;
    this.showSecondSection = true;
  }

  passwordToggle() {
    this.showPassword =!this.showPassword;
  }

  back() {
    this.userEmail = '';
    this.showSecondSection = false;
  }

  login() {
    window.location.href = "/dashboard/transactions";
  }

  

}
