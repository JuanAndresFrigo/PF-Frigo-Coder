import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseComponent } from './table-course.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

describe('TableCourseComponent', () => {
  let component: TableCourseComponent;
  let fixture: ComponentFixture<TableCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCourseComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule],
    });
    fixture = TestBed.createComponent(TableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
