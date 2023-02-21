import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { FeatureType, FeatureGroup, Feature } from '../models/missing';
import { RequestObject } from '../models/requestObject';

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

  GetFeatureTypesByGroupCode(groupCode:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/FeatureType/GetFeatureTypesByGroupCode?code=`+groupCode);
  }

  PostFeatureGroup(featureGroup:FeatureGroup): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = featureGroup;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/featureGroup`, requestObj);
  }
  PostFeatureType(featureType:FeatureType): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = featureType;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/featureType`, requestObj);
  }

  PutFeatureGroup(featureGroup:FeatureGroup): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = featureGroup;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/featureGroup/`+ featureGroup.id, requestObj);
  }
  PutFeatureType(featureType:FeatureType): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = featureType;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/featureType/`+ featureType.id,requestObj);
  }
  PutFeature(feature:Feature): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = feature;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/feature/`+ feature.id, requestObj);
  }
}
