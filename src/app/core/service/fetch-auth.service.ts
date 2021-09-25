import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class FetchAuthService {
  token: any = false
  constructor(
    private http: HttpClient
  ) {
    //reload
    console.log("yes baby")
    if(window.localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
    }
  }
  setToken(element: any){
    console.log(element.token)
    if(element.token){
      localStorage.setItem("token", element.token );
      this.token = element.token
    }
  }

  returnToken() {
    return this.token
  }

  closeSession(){
    this.token = false,
    localStorage.removeItem('token');
  }
}
