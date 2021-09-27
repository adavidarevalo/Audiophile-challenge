import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component'
import { CloseMenuService } from "../../../core/service/close-menu.service"
import { CartService } from '../../../core/service/cart.service'
import { FetchAuthService } from '../../../core/service/fetch-auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuHidden: boolean = true
  count = 0
  Auth: boolean = false

  constructor(
    private _bottomSheet: MatBottomSheet,
    private closeMenuService: CloseMenuService,
    private cartService: CartService,
    private fetchAuthService: FetchAuthService
  ) {
    this.count = 0
    this.cartService.cartContainer$.subscribe(item => {
      this.count = 0
      item.map((element: any) => {
        this.count = this.count + element.count
      })
    })
    this.closeMenuService.menuContainer$.subscribe(item=>{
      this.MenuHidden = false
    })
  }

  ngOnInit(): void {
    this.fetchAuthService.tokencontainer$.subscribe((item: any)=>{
      if(item){
        this.Auth = true
      }
    })
  }

  changeMenu(){
    this.MenuHidden = !this.MenuHidden
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
  clickMenu(){
    this.closeMenuService.changeMenu()
  }
  closeAccount(){
    this.fetchAuthService.closeSession()
    this.Auth = false
  }
}
