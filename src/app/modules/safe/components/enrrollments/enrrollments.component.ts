import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrrollmentsActions } from './store/enrrollments.actions';

@Component({
  selector: 'app-enrrollments',
  templateUrl: './enrrollments.component.html',
  styleUrls: ['./enrrollments.component.scss'],
})
export class EnrrollmentsComponent {
  constructor(private store: Store) {
    this.store.dispatch(EnrrollmentsActions.loadEnrrollmentss());
  }
}
