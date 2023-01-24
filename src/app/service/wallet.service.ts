import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { Transaction } from '../models/transaction';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private httpClient: HttpClient) { }

GetWallets(): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/wallet`);
}
}
