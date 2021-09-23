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
  }

  deleteAllProducts(){
    console.log('delete')
    this.CartProduct = []
    this.CartContainer.next(this.CartProduct)
  }

  changeCount(item: any){
    console.log(item)
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
    this.CartProduct.filter((item: any) => {
      this.CartProduct = [item.name !== element]
    })
    console.log(this.CartProduct)
  }

}
