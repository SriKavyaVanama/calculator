import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalComponent } from './cal/cal.component';
import { RouterModule } from '@angular/router';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalComponent
  ],
  imports: [
    CommonModule, RouterModule, CalculatorRoutingModule, ReactiveFormsModule
  ]
})
export class CalculatorModule { }
