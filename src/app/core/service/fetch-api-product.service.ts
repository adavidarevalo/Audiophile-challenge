import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FetchApiProductService {
  information = []
  constructor(
    private http: HttpClient
  ) { }
  getElement(product: string){
    return this.http.get(`https://audiophilebackend.herokuapp.com/api/product/${product}`)
  }
}
