import { Routes } from '@angular/router';
import { CounterWithSignalsComponent } from './counter-with-signals/counter-with-signals.component';
import { Parent1Component } from './lifeCycleHooks/parent-1/parent-1.component';
import { Parent2Component } from './lifeCycleHooks/parent-2/parent-2.component';

export const routes: Routes = [

   // life cycle hooks routes
   {
      path:'life-cycle',
      component:Parent1Component
   },
   {
      path:'life-cycle2',
      component:Parent2Component
   },
{
    path:'counter',
    component:CounterWithSignalsComponent
 },
 {
    path:'user/:id', component:CounterWithSignalsComponent
 },
 {
    path:'user/:id/:name',component:CounterWithSignalsComponent
 },
 {
    path:'**', redirectTo:'counter', pathMatch:'full'
 }
];
