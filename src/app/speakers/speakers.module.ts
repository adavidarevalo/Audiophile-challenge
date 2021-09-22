import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersMainComponent } from './components/speakers-main/speakers-main.component';
import { SpeakersRoutingModule } from './speakers-routing.module'
import { SharedModule } from '../shared/shared.module';
import { SpeakersNameComponent } from './components/speakers-name/speakers-name.component'

@NgModule({
  declarations: [
    SpeakersMainComponent,
    SpeakersNameComponent
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    SharedModule
  ]
})
export class SpeakersModule { }
