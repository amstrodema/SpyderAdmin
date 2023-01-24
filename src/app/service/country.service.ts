import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  GetCountries(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/country`);
  }

  PostCountry(country:Country): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/country`, country);
  }

  PutCountry(country:Country): Observable<any> {
    return this.httpClient.put(ModelClass.baseUrl+`api/country/`+country.id, country);
  }
}
