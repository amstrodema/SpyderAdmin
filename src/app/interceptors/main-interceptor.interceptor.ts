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
    this.loaderService.show();
    if (!ModelClass.isLogged) {
      this.router.navigate([""], { replaceUrl: true });
    }
    return next.handle(request).pipe(
      finalize(()=> this.loaderService.hide())
    );
  }
}
