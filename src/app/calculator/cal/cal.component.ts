import { Component } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss'],
})
export class CalComponent {
  finalResultValue: number = 0;
  numberList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operatorList: string[] = ['+', '-', '*', '/'];
  calculatorForm = this.formBuilder.group({
    input: [''],
  });
  constructor(private formBuilder: FormBuilder) {}
  getCalcInput(): AbstractControl<string | null, string | null> | null {
    return this.calculatorForm.get('input');
  }

  setInputValue(buttonValue: number | string): void {
    const inputValue: string =
      (this.getCalcInput()?.value as string) + buttonValue;
    this.getCalcInput()?.setValue(inputValue as string);
  }

  onClear(): void {
    this.getCalcInput()?.setValue('');
    this.finalResultValue = 0;
  }
  onSubmit(): void {
    this.finalResultValue = eval(this.getCalcInput()?.value as string);
  }
}
