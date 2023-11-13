import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        GenericCardModule,
        ReactiveFormsModule,
        FormErrorsModule,
        MatFormFieldModule,
        MatInputModule,
        ButtonModule,
        MatButtonModule,
      ],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
