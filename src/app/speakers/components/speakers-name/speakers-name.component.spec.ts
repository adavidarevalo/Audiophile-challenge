import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersNameComponent } from './speakers-name.component';

describe('SpeakersNameComponent', () => {
  let component: SpeakersNameComponent;
  let fixture: ComponentFixture<SpeakersNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
