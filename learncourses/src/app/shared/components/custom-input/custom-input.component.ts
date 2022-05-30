import { Component, forwardRef, HostBinding, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit,ControlValueAccessor {

  @HostBinding('attr.class') cssvar = 'custom-inputDiv';
  onChangeA: any = () => {};
  onTouchA: any = () => {};
  val = ''; // this is the updated value that the class accesses

  set value(val:any) {
    // this value is updated by programmatic changes
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChangeA(val);
      this.onTouchA(val);
    }
  }

  constructor() {}
  // this method sets the value programmatically
  writeValue(obj: any): void {
    this.value = obj;
  }
  // upon UI element value changes, this method gets triggered
  /*registerOnChange(fn: any): void {
    this.onChangeA = fn;

  }*/
  checkmethod() {
   console.log(this.val);
  }
  registerOnChange(fn: any): void {
    this.onChangeA = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchA = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('Method not implemented.');
  }


}
