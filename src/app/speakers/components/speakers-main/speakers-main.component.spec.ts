import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersMainComponent } from './speakers-main.component';

describe('SpeakersMainComponent', () => {
  let component: SpeakersMainComponent;
  let fixture: ComponentFixture<SpeakersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
