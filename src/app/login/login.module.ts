import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LoginRoutingModule } from './login-routing.module'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
