import { Component, OnInit, Input, Output } from '@angular/core';
import { CloseMenuService } from "../../../core/service/close-menu.service"

@Component({
  selector: 'app-card-select-menu',
  templateUrl: './card-select-menu.component.html',
  styleUrls: ['./card-select-menu.component.scss']
})
export class CardSelectMenuComponent implements OnInit {
  @Input() datafirst: any;

  constructor(
    private closeMenuService: CloseMenuService
  ) { }

  ngOnInit(): void {
  }

  cliskMenu(){
    this.closeMenuService.changeMenu()
  }

}
