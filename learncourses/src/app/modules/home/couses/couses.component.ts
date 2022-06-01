import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couses',
  templateUrl: './couses.component.html',
  styleUrls: ['./couses.component.scss']
})
export class CousesComponent implements OnInit {
form!:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=fb.group({
      title:['',[Validators.required]],
      content:['',[Validators.required,Validators.minLength(100)]]
    })
   }

  ngOnInit(): void {
  }
  sendRequest(){
    console.log(this.form.controls['content']);
  }

}
