import { Injectable } from '@angular/core';
import { ModelClass } from '../models/modelClass';
import { RequestObject } from '../models/requestObject';
import { Withdrawal } from '../models/withdrawal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

constructor(private httpClient: HttpClient) { }
GetWithdrawals(statusCode): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = statusCode;
  requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/withdrawal/GetWithdrawals`, requestObj);
  }

PayOut(): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/withdrawal/PayOut`, requestObj);
  }

  PrintPayOut(statusCode:number): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.appID = ModelClass.clientSystem.appID;
  requestObj.data = statusCode;

    return this.httpClient.post(ModelClass.baseUrl+`api/withdrawal/PrintPayOut`, requestObj);
  }
}
