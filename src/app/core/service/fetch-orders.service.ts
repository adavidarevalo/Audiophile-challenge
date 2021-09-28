import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FetchOrdersService {

  constructor(
    private http: HttpClient
  ) { }


  getAllOrders(){
    return this.http.get(`http://localhost:4000/api/projects`)
  }
  createPurchase(project: any){
    return this.http.post("https://audiophilebackend.herokuapp.com/api/projects", project)
  }
}


