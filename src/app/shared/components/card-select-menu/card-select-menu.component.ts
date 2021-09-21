import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-select-menu',
  templateUrl: './card-select-menu.component.html',
  styleUrls: ['./card-select-menu.component.scss']
})
export class CardSelectMenuComponent implements OnInit {
  @Input() datafirst: any;

  constructor() { }

  ngOnInit(): void {
  }

}
