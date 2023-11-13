import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { UppercaseDirectiveModule } from 'src/app/directives/uppercase-directive/uppercase-directive.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FullnameModule } from 'src/app/pipes/fullname/fullname.module';
import { MatTableModule } from '@angular/material/table';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        MatTableModule,
        FullnameModule,
        MatButtonModule,
        MatIconModule,
        UppercaseDirectiveModule,
      ],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
