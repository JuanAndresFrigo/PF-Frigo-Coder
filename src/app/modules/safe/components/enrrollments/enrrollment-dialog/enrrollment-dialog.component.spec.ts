import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrrollmentDialogComponent } from './enrrollment-dialog.component';

describe('EnrrollmentDialogComponent', () => {
  let component: EnrrollmentDialogComponent;
  let fixture: ComponentFixture<EnrrollmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrrollmentDialogComponent],
    });
    fixture = TestBed.createComponent(EnrrollmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
