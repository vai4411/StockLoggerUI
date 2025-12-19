import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../shared/loader';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log('Interceptor triggered');

    this.loaderService.show();

    return next.handle(request).pipe(
      tap(() => console.log('HTTP response received')),
      finalize(() => {
        console.log('Interceptor finalize');
        this.loaderService.hide();
      })
    );
  }
}
