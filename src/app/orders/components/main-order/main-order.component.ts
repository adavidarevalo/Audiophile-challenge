import { Component, OnInit } from '@angular/core';
import { FetchOrdersService } from "../../../core/service/fetch-orders.service"
import { CloseMenuService } from "../../../core/service/close-menu.service"

@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss']
})
export class MainOrderComponent implements OnInit {
  panelOpenState = false;
  orders: any = []
  loading = true
  constructor(
    private fetchOrdersService: FetchOrdersService,
    private closeMenuService: CloseMenuService
  ) {
    this.fetchAllOrders(),
    this.closeMenuService.changeMenu()
   }

  ngOnInit(): void {
  }

  fetchAllOrders(){
    this.fetchOrdersService.getAllOrders()
    .subscribe(
      (item: any) => {
        this.orders = item.project
        this.loading = false
      },
      error => console.log(error)
    )
  }

}
