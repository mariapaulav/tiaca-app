import { Component, HostListener, Input } from '@angular/core';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-phone-code-input',
  templateUrl: './phone-code-input.component.html',
  styleUrls: ['./phone-code-input.component.css']
})
export class PhoneCodeInputComponent {

    ScreenLarge!: boolean;

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.ScreenLarge = window.innerWidth > 768;
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

    @Input() user: string='';
}
