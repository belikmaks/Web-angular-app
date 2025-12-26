import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private baseUrl = 'https://694edec7b5bc648a93c17e07.mockapi.io/api/v1';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url.startsWith('/') ? req.url : `/${req.url}`;
    const apiReq = req.clone({ url: `${this.baseUrl}${url}` });

    return next.handle(apiReq);
  }
}
