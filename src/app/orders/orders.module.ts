import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOrderComponent } from './components/main-order/main-order.component';
import { OrdersRoutingModule } from './orders-routing.module'


@NgModule({
  declarations: [
    MainOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
