import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private transactionService:TransactionService) { }
transactions: Transaction[] = [];
  ngOnInit() {
    this.GetTransaction();
  }
  GetTransaction(){
    this.transactionService.GetTransaction().subscribe((response: any) => {
      this.transactions = response;
    });

  }
}
