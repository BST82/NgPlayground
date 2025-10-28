import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-1',
  imports: [Child1Component,CommonModule],
  templateUrl: './parent-1.component.html',
  styleUrl: './parent-1.component.scss'
})
export class Parent1Component {
  parentMessage = 'Initial Message from Parent';
  showChild = true;

  updateMessage() {
    this.parentMessage = 'Updated Message from Parent';
  }

  destroyChild() {
    this.showChild = false;
  }
}
