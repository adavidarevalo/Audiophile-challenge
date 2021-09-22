import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class CloseMenuService {
  private MenuBoolean = false;
  private MenuContainer = new BehaviorSubject(false)

  constructor() { }
  menuContainer$ = this.MenuContainer.asObservable();

  changeMenu(){
    this.MenuBoolean = true
    this.MenuContainer.next(this.MenuBoolean)
  } 
}
