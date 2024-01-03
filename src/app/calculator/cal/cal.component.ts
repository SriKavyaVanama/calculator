import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss'],
})
export class CalComponent {
  finalResultValue: number = 0;
  numberList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operatorList: string[] = ['+', '-', '*', '/'];
  calculatorForm: FormGroup<{ input: FormControl<string | null> }>;

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = this.formBuilder.group({
      input: [''],
    });
  }

  get calcInput(): AbstractControl<string | null, string | null> | null {
    return this.calculatorForm.get('input');
  }

  setInputValue(buttonValue: number | string): void {
    const inputValue: string = (this.calcInput?.value as string) + buttonValue;
    this.calcInput?.setValue(inputValue as string);
  }

  onClear(): void {
    this.calcInput?.setValue('');
    this.finalResultValue = 0;
  }
  onSubmit(): void {
    this.finalResultValue = eval(this.calcInput?.value as string);
  }
}
