import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrrollmentsComponent } from './enrrollments.component';

xdescribe('EnrrollmentsComponent', () => {
  let component: EnrrollmentsComponent;
  let fixture: ComponentFixture<EnrrollmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrrollmentsComponent],
    });
    fixture = TestBed.createComponent(EnrrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
