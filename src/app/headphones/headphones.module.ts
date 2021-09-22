import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadphonesMainComponent } from './components/headphones-main/headphones-main.component';
import { HeadphonesRoutingModule } from './headphones-routing.module'
import { SharedModule } from '../shared/shared.module';
import { HeadphonesNameComponent } from './components/headphones-name/headphones-name.component'


@NgModule({
  declarations: [
    HeadphonesMainComponent,
    HeadphonesNameComponent
  ],
  imports: [
    CommonModule,
    HeadphonesRoutingModule,
    SharedModule
  ]
})
export class HeadphonesModule { }
