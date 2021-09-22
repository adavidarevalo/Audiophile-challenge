import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FetchApiProductService } from "../../../core/service/fetch-api-product.service"


@Component({
  selector: 'app-speakers-name',
  templateUrl: './speakers-name.component.html',
  styleUrls: ['./speakers-name.component.scss']
})
export class SpeakersNameComponent implements OnInit {
  name: string = ""
  data: any = false
  count: number = 1

  constructor(
    private fetchApiProductService: FetchApiProductService,
    private activatedRoute: ActivatedRoute
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
      console.log("information ", information)
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

}
