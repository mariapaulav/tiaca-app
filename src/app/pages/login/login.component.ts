import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail!: string;
  showPassword!:boolean;
  showSecondSection: boolean = false;


  constructor(private router: Router) {}
  login() {
    this.router.navigateByUrl('/dashboard/transactions');
  }
  
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
}
