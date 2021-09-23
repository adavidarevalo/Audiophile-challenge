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
      this.count = this.cartService.countAllProducts()
      this.cartService.cartContainer$.subscribe((item: any)=>{
        this.cartProduct = item
        item.map((element: any) => {
          this.count = this.count + element.count
        })
        this.realPrice()
      })
    }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

  realPrice(){
    this.cartProduct.map((pricePlus: any) => {
      this.price = this.price + (pricePlus.count * pricePlus.price)
    })
  }

  deleteProducts(){
    console.log('yes baby')
    this.cartService.deleteAllProducts()
  }

  plusProduct(operation: any){
    let num = operation.actual
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
  }

}