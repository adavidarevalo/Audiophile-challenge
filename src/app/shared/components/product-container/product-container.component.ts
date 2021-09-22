import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  @Input() newProduct: any = false;
  @Input() nameContainer: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
