import { Component, Input } from '@angular/core';
import {Invoice} from '../../models/invoice.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() invoice!: Invoice;
}
