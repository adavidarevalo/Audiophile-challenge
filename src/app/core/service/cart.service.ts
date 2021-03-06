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
    let InArray: boolean = false
    this.CartProduct.map((item: any )=> {
      product.name === item.name && (InArray = true)
    })
    if(InArray){
      this.CartProduct.map((item: any) => {
      item.name === product.name
      ? item.count = item.count + product.count
      : null
    })
    } else {
      this.CartProduct = [...this.CartProduct ,product]
      this.CartContainer.next(this.CartProduct)
    }
  }

  deleteAllProducts(){
    this.CartProduct = []
    this.CartContainer.next(this.CartProduct)
  }

  changeCount(item: any){
    if(item.count <= 0){
      return this.deleteProduct(item.name)
    }
    this.CartProduct.map((product: any) => {
      product.name === item.name
      ? product.count = item.count
      : null
    })

  }

  deleteProduct(element: string){
    if(this.CartProduct.length === 1){
      return this.deleteAllProducts()
    }

    this.CartProduct.filter(function(i: any) {
      return i.name !== element
    })
    this.CartContainer.next(this.CartProduct)
  }

}
