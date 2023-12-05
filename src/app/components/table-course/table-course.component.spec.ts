import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseComponent } from './table-course.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store, StoreModule } from '@ngrx/store';

xdescribe('TableCourseComponent', () => {
  let component: TableCourseComponent;
  let fixture: ComponentFixture<TableCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCourseComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule, HttpClientTestingModule, StoreModule],
      providers:[Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher]
    });
    fixture = TestBed.createComponent(TableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
