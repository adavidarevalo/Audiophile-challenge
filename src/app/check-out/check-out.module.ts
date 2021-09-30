import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutMainComponent } from './components/check-out-main/check-out-main.component';
import { CheackOutRoutingModule } from './check-out-routing.module';
import { CheckOutPaymentComponent } from './components/check-out-payment/check-out-payment.component'
import { MaterialModule } from "../material/material.module";
import { ModalComponent } from './components/modal/modal.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckOutMainComponent,
    CheckOutPaymentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CheackOutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CheckOutModule { }
