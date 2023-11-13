import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardComponent } from './generic-card.component';
import { ButtonModule } from '../button/button.module';
import { MatCardModule } from '@angular/material/card';

describe('GenericCardComponent', () => {
  let component: GenericCardComponent;
  let fixture: ComponentFixture<GenericCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericCardComponent],
      imports: [MatCardModule, ButtonModule],
    });
    fixture = TestBed.createComponent(GenericCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
