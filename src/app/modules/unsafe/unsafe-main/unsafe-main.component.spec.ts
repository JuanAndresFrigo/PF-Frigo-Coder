import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsafeMainComponent } from './unsafe-main.component';

describe('UnsafeMainComponent', () => {
  let component: UnsafeMainComponent;
  let fixture: ComponentFixture<UnsafeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsafeMainComponent],
    });
    fixture = TestBed.createComponent(UnsafeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
