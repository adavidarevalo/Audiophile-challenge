import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CartService } from "../../../core/service/cart.service"


@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.scss']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {
  cartProduct: any = []
  price: any = 0
  count: any = 0

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
    private cartService: CartService
    ) {
      this.cartService.cartContainer$.subscribe((item: any)=>{
        this.cartProduct = item
        this.realCount()
        this.realPrice()
      })
    }
  
  realCount(){
    this.count = 0
    this.cartProduct.map((element: any) => {
      this.count = this.count + element.count
    })
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

  realPrice(){
    this.price = 0
    this.cartProduct.map((pricePlus: any) => {
      this.price = this.price + (pricePlus.count * pricePlus.price)
    })
  }

  deleteProducts(){
    this.cartService.deleteAllProducts()
  }

  plusProduct(operation: any){
    this.price = 0
    let num = operation.actual
    if(operation.actual === 0){
      this.cartService.deleteProduct(operation.name)
    }
    if(operation.sign === 'plus'){
      num = num + 1
    } else {
      num = num - 1
    }
    this.cartService.changeCount({
      name: operation.name,
      count: num
    })
    this.realPrice()
    this.realCount()
  }

}