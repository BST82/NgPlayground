import { 
  Component, Input, SimpleChanges, 
  OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, 
  OnDestroy, ElementRef, ViewChild 
} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-child-1',
  imports:[CommonModule],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.scss'
})
export class Child1Component implements 
  OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message: string = '';
  @ViewChild('childText') childText!: ElementRef;

  constructor() {
    console.log('✅ constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('🔁 ngOnChanges called:', changes);
  }

  ngOnInit() {
    console.log('🚀 ngOnInit called');
  }

  ngDoCheck() {
    console.log('🩺 ngDoCheck called - custom change detection');
  }

  ngAfterContentInit() {
    console.log('📥 ngAfterContentInit called - content projected');
  }

  ngAfterContentChecked() {
    console.log('✅ ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('👁️ ngAfterViewInit called - view initialized');
    console.log('ViewChild text content:', this.childText.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('🔍 ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('💣 ngOnDestroy called - component destroyed');
  }
}
