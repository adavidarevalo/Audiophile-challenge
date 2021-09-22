import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component'
import { CloseMenuService } from "../../../core/service/close-menu.service"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuHidden: boolean = true

  constructor(
    private _bottomSheet: MatBottomSheet,
    private closeMenuService: CloseMenuService
  ) {
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
