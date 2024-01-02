import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss'],
})
export class CalComponent {
  finalResultValue : number =0;
  numberList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operatorList: string[] = ['+', '-', '*', '/'];
  calculatorForm = this.formBuilder.group({
    input: [''],
  });
  constructor(private formBuilder: FormBuilder) {}

  setInputValue(buttonValue: number | string) {
    const inputValue: string =
      (this.calculatorForm.get('input')?.value as string) + buttonValue; 
    this.calculatorForm.get('input')?.setValue(inputValue as string);
  }
  onSubmit() {
    this.finalResultValue = eval(this.calculatorForm.get('input')?.value as string)
  }
}
