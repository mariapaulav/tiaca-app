import { Component, HostListener} from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public location: Location) {
    this.onResize();
  }

  back(): void {
    this.location.back()
  }
  
  ScreenLarge!: boolean;
  largeWidth: string = '200px';
  smallWidth: string = '150px';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ScreenLarge = window.innerWidth > 768;
  }

  modalOpen = false;
  mostrarFoto: boolean = false;

  openModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
    this.mostrarFoto = true;
  }

}