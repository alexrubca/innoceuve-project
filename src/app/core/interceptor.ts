import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Update the request Parameters
    const updatedRequest = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
    });
    // Log updated parameters
    console.log('Before making api call : ', updatedRequest);
    return next.handle(request).pipe(
      tap(
        event => {
          // Print http response into the browser's console in case of success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // Print http response into the browser's console in case of failure
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
            alert('Ha ocurrido un error. Inténtelo más tarde.');
            this.router.navigateByUrl('/');
          }
        }
      )
    );
  }
}
