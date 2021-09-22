import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpMainComponent } from './components/sing-up-main/sing-up-main.component';
import { SignUpRoutingModule } from './sign-up-routing.module'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    SingUpMainComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MaterialModule
  ]
})
export class SignUpModule { }
