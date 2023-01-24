import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  GetCommentVMsByItemID(itemID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/comment/GetCommentVMsByItemID?itemID=`+itemID);
  }
  Comment(comment:Comment): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/comment`, comment);
  }
}
