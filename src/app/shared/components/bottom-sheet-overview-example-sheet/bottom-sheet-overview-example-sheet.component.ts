import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CartService } from "../../../core/service/cart.service"


@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.scss']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {
  cartProduct: any
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
    private cartService: CartService
    ) {
      this.cartService.cartContainer$.subscribe(item=>{
        this.cartProduct = item
        console.log("baby ",this.cartProduct )
      })
    }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
