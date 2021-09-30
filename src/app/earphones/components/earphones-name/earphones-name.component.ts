import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { FetchApiProductService } from "../../../core/service/fetch-api-product.service"
import { CartService } from "../../../core/service/cart.service"

@Component({
  selector: 'app-earphones-name',
  templateUrl: './earphones-name.component.html',
  styleUrls: ['./earphones-name.component.scss']
})
export class EarphonesNameComponent implements OnInit {
  name: string = ""
  data: any = false
  count: number = 1
  addCart: boolean = false

  constructor(
    private fetchApiProductService: FetchApiProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.name = params.name
      this.fetchDetails(this.name)
    })
  }

  fetchDetails(info: string){
    this.fetchApiProductService.getElement(info)
    .subscribe(information => {
      this.data = information;
    })
  }

  addCount(plus: string){
    if(plus === "plus"){
      if(this.count >= 1){
        this.count = this.count + 1
      } else {
        this.count = 1
      }
    } else {
      if(this.count <= 1){
        this.count = 1
      } else {
        this.count = this.count - 1
      }
    }
  }

  sendProduct(){
    this.addCart = true
    this.cartService.addCart({
      title: this.data.title,
      name: this.data.name,
      price: this.data.price,
      count: this.count
    })
    setTimeout(() => {
      this.addCart = false
    }, 5000);
  }
}
