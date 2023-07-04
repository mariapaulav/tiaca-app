import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from 'src/app/models/invoice.models';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
http=inject(HttpClient)
invoices:Invoice[]=[]

ngOnInit(){
  this.http.get<Invoice[]>('../../../assets/data.json')
    .subscribe(data => {
    this.invoices = data;
    console.log(data)
    });
  }
}


