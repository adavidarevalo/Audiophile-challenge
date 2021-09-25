import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-check-out-payment',
  templateUrl: './check-out-payment.component.html',
  styleUrls: ['./check-out-payment.component.scss']
})
export class CheckOutPaymentComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
