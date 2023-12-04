import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMainComponent } from './users-main.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { TableModule } from 'src/app/components/table/table.module';

describe('UsersMainComponent', () => {
  let component: UsersMainComponent;
  let fixture: ComponentFixture<UsersMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersMainComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        TableModule,
        ButtonModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(UsersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
