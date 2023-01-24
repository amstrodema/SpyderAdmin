import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  GetTransaction(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/transaction`);
  }
}
