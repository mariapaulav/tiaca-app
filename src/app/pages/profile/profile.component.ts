import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public location: Location) {}

  back(): void {
    this.location.back()
  }
}