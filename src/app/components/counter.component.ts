import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Contador usando redux';

  counter: number = 0;

  constructor(private store: Store<{counter: number}> ) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    })
  }

  increment(): void{
    this.store.dispatch(increment({add : 4}));
    // this.counter++
    console.log("Incrementando");
  }

  decrement(): void{
    this.store.dispatch(decrement());
    // this.counter--
    console.log("decrementando");
  }

  reset(): void{
    this.store.dispatch(reset());
    // this.counter = 0;
    console.log('resetenado')
  }

}
