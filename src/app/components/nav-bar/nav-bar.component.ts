import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) { }

  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
  }

  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.showMenu = false;
    }
  });
}
}