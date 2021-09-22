import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphonesNameComponent } from './earphones-name.component';

describe('EarphonesNameComponent', () => {
  let component: EarphonesNameComponent;
  let fixture: ComponentFixture<EarphonesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarphonesNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarphonesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
