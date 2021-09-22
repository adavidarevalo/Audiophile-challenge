import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphonesMainComponent } from './earphones-main.component';

describe('EarphonesMainComponent', () => {
  let component: EarphonesMainComponent;
  let fixture: ComponentFixture<EarphonesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarphonesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarphonesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
