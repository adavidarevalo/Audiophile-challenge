import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { FetchAuthService } from '../../../core/service/fetch-auth.service'
@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {
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
      email: ["", [Validators.required, Validators.email]],
      password:["", [Validators.required]],
    })
  }
  sendUp(){
    this.http.post("http://localhost:4000/api/auth", this.form.value) 
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

