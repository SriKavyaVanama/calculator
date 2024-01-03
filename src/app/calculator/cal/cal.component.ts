import { Component, OnInit } from '@angular/core';
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
export class CalComponent implements OnInit {
  finalResultValue: number = 0;
  numberList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operatorList: string[] = ['+', '-', '*', '/'];
  isInputEntered: boolean = false;
  isResultShown: boolean = false;
  calculatorForm: FormGroup<{ input: FormControl<string | null> }>;

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = this.formBuilder.group({
      input: [''],
    });
  }

  ngOnInit(): void {
    this.calculatorForm.valueChanges.subscribe(
      (formValues: Partial<{ input: string | null }>) => {
        this.isInputEntered = !!this.calcInput?.value?.length;
        this.isResultShown = false;
      }
    );
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
    this.isResultShown = false;
  }

  onSubmit(): void {
    this.finalResultValue = eval(this.calcInput?.value as string);
    this.isResultShown = true;
  }
}
