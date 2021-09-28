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
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQ29udGFpbmVyIjp7ImlkIjoiNjE1MGNmZGZmZDg5MjMzNzEwMWFkYmJhIn0sImlhdCI6MTYzMjg0OTA5OSwiZXhwIjoxNjMyODUyNjk5fQ.anm54VqXdWSXVILTgshvWc3a1_NjWJQlQBnW36xkxKs'
    })
    const reqClone = req.clone({
      headers
    })
    console.log(reqClone)

    return next.handle(reqClone)
  }
}
 