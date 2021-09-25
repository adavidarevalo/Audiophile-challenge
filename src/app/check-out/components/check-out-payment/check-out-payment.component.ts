import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-check-out-payment',
  templateUrl: './check-out-payment.component.html',
  styleUrls: ['./check-out-payment.component.scss']
})
export class CheckOutPaymentComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
