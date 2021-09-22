import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCradAnimationsComponent } from './menu-crad-animations.component';

describe('MenuCradAnimationsComponent', () => {
  let component: MenuCradAnimationsComponent;
  let fixture: ComponentFixture<MenuCradAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCradAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCradAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
