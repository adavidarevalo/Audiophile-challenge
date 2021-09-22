import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesNameComponent } from './headphones-name.component';

describe('HeadphonesNameComponent', () => {
  let component: HeadphonesNameComponent;
  let fixture: ComponentFixture<HeadphonesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
