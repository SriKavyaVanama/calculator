import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { CalculatorModule } from '../calculator/calculator.module';
import { CalculatorRoutingModule } from '../calculator/calculator-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, RouterModule, LoginRoutingModule, CalculatorModule, CalculatorRoutingModule],
})
export class LoginModule {}
