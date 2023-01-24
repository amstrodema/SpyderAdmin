import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { Payment } from 'src/app/models/payment';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private paymentService:PaymentService, private walletService:WalletService) { }
payments: Payment[] = [];
wallets: Wallet[] = [];
  ngOnInit() {
    this.GetPayments();
    this.GetWallets();
  }

  GetPayments(){
    this.paymentService.GetPayment().subscribe((response: any) => {
      this.payments = response;
    });
  }

  GetWallets(){
    this.walletService.GetWallets().subscribe((response: any) => {
      this.wallets = response;
    });
  }
}
