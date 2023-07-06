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


  back(): void {
    this.location.back()
  }

  ScreenLarge!: boolean;

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.ScreenLarge = window.innerWidth > 768;
    }

    modalOpen = false;
    showPhoto: boolean = false;

    openModal() {
      this.modalOpen = true;
    }

    onCloseModal() {
      this.modalOpen = false;
      this.showPhoto = true;
    }

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

        const customSelect = document.querySelector(".custom-select")!;
        const selectedOption = customSelect.querySelector(".selected-option")!;

        selectedOption.addEventListener("click", function () {
          customSelect.classList.toggle("open");
          });
        });
      }
      selectedValue!: string; 
      selectedImage!: string; 
      isOpen = false;

      selectOption(value: string, imagePath: string): void {
        this.selectedValue = value;
        this.selectedImage = imagePath;
        const customSelect = document.querySelector(".custom-select");
        if (customSelect) {
          customSelect.classList.remove("open"); // Remueve la clase "open" para cerrar la lista
        }
      }
}