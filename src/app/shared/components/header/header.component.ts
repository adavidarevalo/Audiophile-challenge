import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuHidden: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeMenu(){
    this.MenuHidden = !this.MenuHidden
  }

}
