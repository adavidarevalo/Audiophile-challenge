import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component'
import { CloseMenuService } from "../../../core/service/close-menu.service"
import { CartService } from '../../../core/service/cart.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuHidden: boolean = true
  count = 0

  constructor(
    private _bottomSheet: MatBottomSheet,
    private closeMenuService: CloseMenuService,
    private cartService: CartService
  ) {
    this.cartService.cartContainer$.subscribe(item => {
      item.map((element: any) => {
        this.count = this.count + element.count
      })
    })
    this.closeMenuService.menuContainer$.subscribe(item=>{
      this.MenuHidden = false
    })
  }

  ngOnInit(): void {
  }

  changeMenu(){
    this.MenuHidden = !this.MenuHidden
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

}
