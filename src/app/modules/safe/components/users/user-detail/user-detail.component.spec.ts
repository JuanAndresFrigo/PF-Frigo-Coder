import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { TableModule } from 'src/app/components/table/table.module';
import { MatListModule } from '@angular/material/list';
import { FormErrorsModule } from 'src/app/pipes/form-errors/form-errors.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        GenericCardModule,
        TableModule,
        ButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormErrorsModule,
        MatListModule,
      ],
      providers:[provideAnimations()]
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
