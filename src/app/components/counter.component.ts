import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Contador usando redux';

  counter: number = 0;

  increment(): void{
    this.counter++
    console.log("Incrementando");
  }

  decrement(): void{
    this.counter--
    console.log("decrementando");
  }

  reset(): void{
    this.counter = 0;
    console.log('resetenado')
  }

}
