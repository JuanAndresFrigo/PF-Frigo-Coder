import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterActions } from '../store/counter/counter.actions';
import { selectCounterValue } from '../store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterValue$: Observable<number>;

  constructor(private store: Store) {
    this.counterValue$ = this.store.select(selectCounterValue);
  }

  sumar(): void {
    this.store.dispatch(CounterActions.sumar({ cantidad: 5 }));
  }

  restar(): void {
    this.store.dispatch(CounterActions.restar({ cantidad: 1 }));
  }
}
