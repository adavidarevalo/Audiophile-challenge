import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarphonesMainComponent } from './components/earphones-main/earphones-main.component';
import { EarphonesHeadphonesRoutingModule } from './earphones-routing.module'
import { SharedModule } from '../shared/shared.module';
import { EarphonesNameComponent } from './components/earphones-name/earphones-name.component'


@NgModule({
  declarations: [
    EarphonesMainComponent,
    EarphonesNameComponent
  ],
  imports: [
    CommonModule,
    EarphonesHeadphonesRoutingModule,
    SharedModule
  ]
})
export class EarphonesModule { }
