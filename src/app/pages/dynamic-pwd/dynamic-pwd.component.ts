import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-pwd',
  templateUrl: './dynamic-pwd.component.html',
  styleUrls: ['./dynamic-pwd.component.css']
})
export class DynamicPwdComponent {
  countdownMinutes: number = 0;
  countdownSeconds: number = 59;
  countdownInterval: any;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
      } else {
        if (this.countdownMinutes > 0) {
          this.countdownMinutes--;
          this.countdownSeconds = 59;
        } else {
          clearInterval(this.countdownInterval);
        }
      }
    }, 1000);
  }

  restartCountdown() {
    this.countdownMinutes = 0;
    this.countdownSeconds = 59;
    clearInterval(this.countdownInterval);
    this.startCountdown();
  }
} 
