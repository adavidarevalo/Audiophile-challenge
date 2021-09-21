import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectMenuComponent } from './card-select-menu.component';

describe('CardSelectMenuComponent', () => {
  let component: CardSelectMenuComponent;
  let fixture: ComponentFixture<CardSelectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
