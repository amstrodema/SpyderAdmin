import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Vote } from '../models/vote';
import { RequestObject } from '../models/requestObject';
import { Hall } from '../models/hall';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private httpClient: HttpClient) { }
  requestObject:RequestObject = new RequestObject();

  GetHalls(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/hall`);
  }
  GetHallMembers(route:string): Observable<any> {
    try {
      this.requestObject.data = route;
      this.requestObject.userID = ModelClass.user.id;
      this.requestObject.countryID = ModelClass.user.countryID;
      } catch (error) {

      }

    return this.httpClient.post(ModelClass.baseUrl+`api/Hall/GetHallMemberVMs`, this.requestObject);
  }

  GetHallMemberDetailsVM(recordID:string): Observable<any> {
    try {
      this.requestObject.itemID = recordID;
      this.requestObject.userID = ModelClass.user.id;
      this.requestObject.countryID = ModelClass.user.countryID;
      } catch (error) {

      }
    return this.httpClient.post(ModelClass.baseUrl+`api/Hall/GetHallMemberDetailsVM`,this.requestObject);
  }

  VoteHall(vote:Vote): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = vote;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/vote`, requestObj);
  }

 PostHall(hall:Hall): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = hall;
  requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/hall`, requestObj);
  }

 PutHall(hall:Hall): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = hall;
  requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/hall/`+hall.id, requestObj);
  }
}
