import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalComponent } from './cal/cal.component';
import { RouterModule } from '@angular/router';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    CalComponent
  ],
  imports: [
    CommonModule, RouterModule, CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
