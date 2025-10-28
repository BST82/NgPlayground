import { Component, computed, signal } from '@angular/core';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-counter-with-signals',
  imports: [TestComponent],
  templateUrl: './counter-with-signals.component.html',
  styleUrl: './counter-with-signals.component.scss'
})
export class CounterWithSignalsComponent {
count = signal(0);
double=computed(()=>this.count()*3)
result = this.count.asReadonly()

increment(){
  this.count.update((c)=>c+1)
}
decrement(){
this.count.update((c)=>c-1)
}

 users = [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Charlie', email: 'charlie@mail.com' },
  ];

}
