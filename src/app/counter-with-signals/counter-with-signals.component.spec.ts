import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithSignalsComponent } from './counter-with-signals.component';

describe('CounterWithSignalsComponent', () => {
  let component: CounterWithSignalsComponent;
  let fixture: ComponentFixture<CounterWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
