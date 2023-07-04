import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
  }
}