import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { FeatureType, FeatureGroup, Feature } from '../models/missing';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private httpClient: HttpClient) { }

  GetFeatureGroups(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/featureGroup`);
  }
  GetFeatureTypes(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/featureType`);
  }
  GetFeatures(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/feature`);
  }

  PostFeatureGroup(featureGroup:FeatureGroup): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/featureGroup`, featureGroup);
  }
  PostFeatureType(featureType:FeatureType): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/featureType`, featureType);
  }

  PutFeatureGroup(featureGroup:FeatureGroup): Observable<any> {
    return this.httpClient.put(ModelClass.baseUrl+`api/featureGroup/`+ featureGroup.id, featureGroup);
  }
  PutFeatureType(featureType:FeatureType): Observable<any> {
    return this.httpClient.put(ModelClass.baseUrl+`api/featureType/`+ featureType.id,featureType);
  }
  PutFeature(feature:Feature): Observable<any> {
    return this.httpClient.put(ModelClass.baseUrl+`api/feature/`+ feature.id, feature);
  }
}
