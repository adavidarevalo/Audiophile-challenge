import { Component, OnInit } from '@angular/core';
import { FetchAuthService } from '../core/service/fetch-auth.service'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private fetchAuthService: FetchAuthService
  ) {   }

  ngOnInit(): void {
    this.fetchAuthService.reloadPage()
  }

}
