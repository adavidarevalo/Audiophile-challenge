import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class FetchAuthService {
  private token: any = false
  private tokenContainer = new BehaviorSubject('')

  constructor(
    private http: HttpClient
  ) {}
  tokencontainer$ = this.tokenContainer.asObservable()

  setToken(element: any){
    if(element.token){
      localStorage.setItem("token", element.token );
      this.token = element.token
    }
    this.userAuth()
    this.tokenContainer.next(this.token)
  }

  reloadPage(){
    this.token = false
    if(window.localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
      this.userAuth()
    }
    this.tokenContainer.next(this.token)
  }

  returnToken() {
    this.tokenContainer.next(this.token)
  }

  closeSession(){
    this.token = false,
    localStorage.removeItem('token');
    this.tokenContainer.next(this.token)
  }
  userAuth(){
    let headers
    if(this.token){
      headers = new HttpHeaders({
        'x-auth-token': this.token
      })
    }
    return this.http.get('https://audiophilebackend.herokuapp.com/', {headers})
  }
}
