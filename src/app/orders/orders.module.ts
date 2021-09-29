import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainOrderComponent } from './components/main-order/main-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderContainerComponent } from './components/order-container/order-container.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    MainOrderComponent,
    OrderContainerComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ]
})
export class OrdersModule { }
