import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss'
})
export class Child2Component {
@Input() message :string =""

constructor(){
  console.log('🧒 Child constructor called');
}
ngOnInit(){
  console.log('🧒 Child ngOnInit called');
  console.log('✅ Message available in ngOnInit:', this.message);
}
}
