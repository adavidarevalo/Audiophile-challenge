import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material/material.module';
import { CardSelectMenuComponent } from './components/card-select-menu/card-select-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { BottomSheetOverviewExampleSheetComponent } from './components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MenuCradAnimationsComponent } from './components/menu-crad-animations/menu-crad-animations.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardSelectMenuComponent,
    BannerComponent,
    BottomSheetOverviewExampleSheetComponent,
    ProductContainerComponent,
    SpinnerComponent,
    MenuCradAnimationsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardSelectMenuComponent,
    BannerComponent,
    ProductContainerComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
