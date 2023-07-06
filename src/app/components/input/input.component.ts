import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string='';
  @Input() width: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
}
