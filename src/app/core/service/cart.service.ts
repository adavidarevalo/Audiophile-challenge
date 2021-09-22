import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private CartProduct: any = [];
  private CartContainer = new BehaviorSubject([])

  constructor() { }
  cartContainer$ = this.CartContainer.asObservable()

  addCart(product: any){
    this.CartProduct = [...this.CartProduct ,product]
    this.CartContainer.next(this.CartProduct)
    console.log("products ", this.CartProduct)
  }
}
