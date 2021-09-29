import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss']
})
export class OrderContainerComponent implements OnInit {
  @Input() item: any = false
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    console.log('xxx ', this.item)
  }

}
