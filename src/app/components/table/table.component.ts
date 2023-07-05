import { Component, Input } from '@angular/core';
import {Invoice} from '../../models/invoice.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() invoice!: Invoice;

    getBadgeClass(status: string): string {
      if (status === '1') {
        return 'pending';
      } else if (status === '2') {
        return 'paid';
      } else if (status === '3') {
        return'in-arrears';
      } else {
        return 'no-class';
      }
    };

  getBadgeText(status: string): string {
      if (status === '1') {
        return 'Por Pagar';
      } else if (status === '2') {
        return 'Pagada';
      } else if (status === '3') {
        return'En Mora';
      } else {
        return '-';
      }
  }
}
