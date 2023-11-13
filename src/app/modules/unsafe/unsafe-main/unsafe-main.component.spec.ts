import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsafeMainComponent } from './unsafe-main.component';
import { RouterModule } from '@angular/router';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';

describe('UnsafeMainComponent', () => {
  let component: UnsafeMainComponent;
  let fixture: ComponentFixture<UnsafeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsafeMainComponent],
      imports:[ LoginModule, RegisterModule, RouterModule]
    });
    fixture = TestBed.createComponent(UnsafeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
