import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutMainComponent } from './components/check-out-main/check-out-main.component';
import { CheackOutRoutingModule } from './check-out-routing.module';
import { CheckOutPaymentComponent } from './components/check-out-payment/check-out-payment.component'


@NgModule({
  declarations: [
    CheckOutMainComponent,
    CheckOutPaymentComponent
  ],
  imports: [
    CommonModule,
    CheackOutRoutingModule
  ]
})
export class CheckOutModule { }
