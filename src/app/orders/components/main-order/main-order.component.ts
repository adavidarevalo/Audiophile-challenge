import { Component, OnInit } from '@angular/core';
import { FetchOrdersService } from "../../../core/service/fetch-orders.service"


@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss']
})
export class MainOrderComponent implements OnInit {
  panelOpenState = false;
  orders: any = false
  constructor(
    private fetchOrdersService: FetchOrdersService
  ) {
    this.fetchAllOrders()
   }

  ngOnInit(): void {
  }

  fetchAllOrders(){
    this.fetchOrdersService.getAllOrders()
    .subscribe(
      item => {this.orders = item, console.log(item)},
      error => console.log(error)
    )
  }

}
