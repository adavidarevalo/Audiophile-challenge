import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesMainComponent } from './headphones-main.component';

describe('HeadphonesMainComponent', () => {
  let component: HeadphonesMainComponent;
  let fixture: ComponentFixture<HeadphonesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
