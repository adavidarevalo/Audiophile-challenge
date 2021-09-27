import { Component, OnInit } from '@angular/core';
import { FetchAuthService } from '../../../core/service/fetch-auth.service'

@Component({
  selector: 'app-check-out-main',
  templateUrl: './check-out-main.component.html',
  styleUrls: ['./check-out-main.component.scss']
})
export class CheckOutMainComponent implements OnInit {
  Auth: boolean = false

  constructor(
    private fetchAuthService: FetchAuthService
  ) { }

  ngOnInit(): void {
    this.fetchAuthService.tokencontainer$.subscribe((item: any)=>{
      if(item){
        this.Auth = true
      }
    })
  }

}
