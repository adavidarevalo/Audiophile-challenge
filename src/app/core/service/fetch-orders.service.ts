import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FetchOrdersService {
  linkBackend: string = "https://audiophilebackend.herokuapp.com/api/projects"

  constructor(
    private http: HttpClient
  ) { }


  getAllOrders(){
    console.log('order')
    return this.http.get(this.linkBackend)
  }
  createPurchase(project: any){
    console.log(project)
    return this.http.post("https://audiophilebackend.herokuapp.com/api/projects" , project)
  }
}


