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

  intervalId: any;
  modalOpen = false;

  ngOnInit(){
    this.http.get<Invoice[]>('../../../assets/data.json')
      .subscribe(data => {
      this.invoices = data;
      });
      this.intervalId = setInterval(() => {
      this.closeModal();
    }, 2000);
  };

  openModal() {
    this.modalOpen = true;
  };

  closeModal() {
    this.modalOpen = false;
  };
  
  ngOnDestroy() {
    clearInterval(this.intervalId);
  };
}


