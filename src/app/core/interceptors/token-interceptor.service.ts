import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const headers = new HttpHeaders({
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQ29udGFpbmVyIjp7ImlkIjoiNjE1MGNmZGZmZDg5MjMzNzEwMWFkYmJhIn0sImlhdCI6MTYzMjc1OTM2OSwiZXhwIjoxNjMyNzYyOTY5fQ.ZbXdzSYFKVM39CDSZDds857-cVmUJ_MgP9gooMLKeJk'
    })
    const reqClone = req.clone({
      headers
    })
    console.log(reqClone)

    return next.handle(reqClone)
  }
}
 