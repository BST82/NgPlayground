// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parent-2',
//   imports: [],
//   templateUrl: './parent-2.component.html',
//   styleUrl: './parent-2.component.scss'
// })
// export class Parent2Component {

// }
import {Component, OnInit} from '@angular/core'
import { Child2Component } from '../child-2/child-2.component';
@Component({
  selector:'',
  templateUrl:'./parent-2.component.html',
  styleUrl:'./parent-2.component.scss',
  imports:[Child2Component]
})

export class Parent2Component implements OnInit {

  parentMessage:string="hello from parent";
  constructor(){
    console.log('hello from constructor')
  }
  ngOnInit(){
console.log('hello from ngOnInit')
  }
}