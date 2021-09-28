import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from "../../core/service/cart.service"

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  cartProduct: any = []
  reqClone: any = false

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cartContainer$.subscribe((item: any)=>{
      this.cartProduct = item
    })
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token: any = localStorage.getItem('token')
    console.log("yes baby")

    if(token){
      const headers = new HttpHeaders({
        'x-auth-token': token
      })
      console.log("xxx ", this.cartProduct)
      if(this.cartProduct.length !== 0){
        const params = new HttpParams(this.cartProduct)
        console.log("params ",params)
      } else {
        this.reqClone = req.clone({
          headers
        })
      }
      return next.handle(this.reqClone)
    } else {
      return next.handle(req)
    }
  }
}
 