import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnrrollmentsComponent } from './table-enrrollments.component';

describe('TableEnrrollmentsComponent', () => {
  let component: TableEnrrollmentsComponent;
  let fixture: ComponentFixture<TableEnrrollmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableEnrrollmentsComponent],
    });
    fixture = TestBed.createComponent(TableEnrrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
