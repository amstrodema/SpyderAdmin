import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Country } from '../models/country';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  GetCountries(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/country`);
  }

  PostCountry(country:Country): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = country;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/country`, requestObj);
  }

  PutCountry(country:Country): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = country;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/country/`+country.id, requestObj);
  }
}
