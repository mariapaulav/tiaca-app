import { Component, HostListener, inject} from '@angular/core';
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public location: Location) {
    this.onResize();
  }

  // go back to page
  back(): void {
    this.location.back()
  }
  // screen size for input width
  ScreenLarge!: boolean;
  largeWidth: string = '200px';
  smallWidth: string = '150px';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ScreenLarge = window.innerWidth > 768;
  }

  // modal functions to display uploading image
  modalOpen = false;
  mostrarFoto: boolean = false;

  openModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
    this.mostrarFoto = true;
  }

  //user-request
  http=inject(HttpClient)
  user: User = {
    name: '',
    lastName: '',
    phone: '',
    phonecode: '',
    email: ''
  };

  ngOnInit() {
    this.http.get<User>('../../../assets/user.json')
    .subscribe(data => {
      this.user = data;
      console.log(data)
    });
  }
}