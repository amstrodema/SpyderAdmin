import { LoaderService } from './../service/loader.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MainInterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      headers: request.headers
      .set('Content-Type','application/json')
      .set('ApiKey','931d3a6f-ba57-4908-923b-c1fea1e3f3ed')
    });

    this.loaderService.show();
    if (!ModelClass.isLogged) {
      this.router.navigate([""], { replaceUrl: true });
    }

    return next.handle(req).pipe(
      finalize(()=> this.loaderService.hide())
    );
  }
}
