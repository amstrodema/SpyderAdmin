import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Paramz } from '../models/paramz';

@Injectable({
  providedIn: 'root'
})
export class ParamzService {

  constructor(private httpClient: HttpClient) { }

  GetParams(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/params`);
  }

  GetParamsWithCode(code:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/params/GetParamsByCode?code=`+code);
  }

  PostParam(param:Paramz): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/params`, param);
  }

  PutParam(param:Paramz): Observable<any> {
    return this.httpClient.put(ModelClass.baseUrl+`api/params/`+param.id, param);
  }
}
