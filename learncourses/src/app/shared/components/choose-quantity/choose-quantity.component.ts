import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    multi:true,
    useExisting:forwardRef(() => ChooseQuantityComponent),

  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => ChooseQuantityComponent)
  }

  ]
})
export class ChooseQuantityComponent implements ControlValueAccessor,Validator{
 quantity:number=0;
 @Input()increment:number=0;
 onChange=(quantity:number)=>{};
 onTouched=()=>{};
 touched = false;
 disabled = false;
 @ViewChild('val') thisInput!:HTMLInputElement;
  constructor() { }
  onAdd(){
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity+= this.increment;
      this.onChange(this.quantity);
    }

  }
  onRemove(){
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity-= this.increment;
      this.onChange(this.quantity);
    }
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  writeValue(quantity: any): void {
    this.quantity=quantity;
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  validate(control: AbstractControl):ValidationErrors|null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity
        }
      };
    }
    return null;
  }
}
