import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/service/cart.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  cartProduct: any = []
  price: any = 0
  constructor(
    private cartService: CartService
  ) {
    this.cartService.cartContainer$.subscribe((item: any)=>{
      this.cartProduct = item
      this.realPrice()
    })
  }

  ngOnInit(): void {
  }

  realPrice(){
    this.price = 0
    this.cartProduct.map((pricePlus: any) => {
      this.price = this.price + (pricePlus.count * pricePlus.price)
    })
  }

}
