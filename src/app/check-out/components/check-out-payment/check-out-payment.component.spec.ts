import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutPaymentComponent } from './check-out-payment.component';

describe('CheckOutPaymentComponent', () => {
  let component: CheckOutPaymentComponent;
  let fixture: ComponentFixture<CheckOutPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
