import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token: any = localStorage.getItem('token')
    if(token){
      const headers = new HttpHeaders({
        'x-auth-token': token
      })
      const reqClone = req.clone({
        headers
      })
      console.log(reqClone)
  
      return next.handle(reqClone)
    } else {
      return next.handle(req)
    }
  }
}
 