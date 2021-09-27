import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss']
})
export class MainOrderComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
