import { AuthenService } from './../authen.service';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @HostBinding('attr.class') varcss="signin";
  form!:FormGroup;
  passobs:BehaviorSubject<any>=new BehaviorSubject<string>('');
  pasSubs!:Subscription;
  private password:string='';
  status:Boolean=true;

  constructor(private fb:FormBuilder,private srv:AuthenService) {
    this.form = this.fb.group({
      email:['rida.jeba@gmail.com',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.form.controls['pass'].valueChanges.subscribe(pass=>{
      this.password=this.form.controls['pass'].value;
    });
  }

  onSubmit(){
  console.warn(this.form);
  this.srv.login(this.form.controls['email'].value,
  this.form.controls['pass'].value)
  .subscribe(res=>{
    console.log(res);
  })

  }
  resetForm(){}


}
