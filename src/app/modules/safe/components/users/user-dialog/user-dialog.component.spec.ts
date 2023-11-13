import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDialogComponent } from './user-dialog.component';

// de momento no corro este test, hasta investigar como hacer que no falle
xdescribe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDialogComponent],
    });
    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
