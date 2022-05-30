import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!:FormGroup;


  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      totalQuantity: [60, [Validators.required, Validators.max(100)]]
    });
  }

  ngOnInit(): void {

  }

}
