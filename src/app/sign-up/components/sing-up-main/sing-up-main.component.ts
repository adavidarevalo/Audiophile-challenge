import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { FetchAuthService } from "../../../core/service/fetch-auth.service"
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up-main',
  templateUrl: './sing-up-main.component.html',
  styleUrls: ['./sing-up-main.component.scss']
})
export class SingUpMainComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  token: any
  hide = true;
  error = false
  constructor(
    private formBuilder: FormBuilder,
    private fetchAuthService: FetchAuthService,
    private http: HttpClient,
    public router: Router
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password:["", [Validators.required]],
    })
  }

  sendUp(){
    this.http.post("https://audiophilebackend.herokuapp.com/api/user", this.form.value) 
    .subscribe(
      data => {
        this.fetchAuthService.setToken(data),
        this.router.navigateByUrl('/')
      },
      error => {
        this.error = error.error.msg
        setTimeout(() => {
          this.error= false
        }, 5000);      
      }
    )
  }

}
