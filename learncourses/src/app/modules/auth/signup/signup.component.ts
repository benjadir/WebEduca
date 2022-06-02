import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { SubjectSubscription } from 'rxjs/internal-compatibility';
import { AuthenService } from '../authen.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  @HostBinding('attr.class') varcss="signin";
  form!:FormGroup;
  passobs:BehaviorSubject<any>=new BehaviorSubject<string>('');
  pasSubs!:Subscription;
  private password:string='';
  status:Boolean=true;

  constructor(private fb:FormBuilder,private serv:AuthenService) {
    this.form = this.fb.group({
      fname:['',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]],
      lname:['',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]],
      email:['rida.jeba@gmail.com',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.minLength(6)]],
      repass:['',[Validators.required,this.confirmValidator.bind(this)]]
    });
  }

  ngOnInit(): void {
    this.form.controls['pass'].valueChanges.subscribe(pass=>{
      this.password=this.form.controls['pass'].value;
    });

    this.form.controls['repass'].valueChanges.subscribe(currentval=>{
      if( this.form.controls['repass'].value===this.password.substring(0,this.form.controls['repass'].value.length)){
      this.status=true;

      }else{
        this.status=false;
      }
     // console.log('errors::',this.form.controls['repass'].errors);
     });


  }

  onSubmit(){
if(this.form.status==='VALID'){
this.serv.signUp(this.form.controls['email'].value,this.form.controls['pass'].value).subscribe((resp:any)=>{
  console.log('response::::>',resp);
},error=>{
  console.log('myErro:::::>',error);
})
//console.log('email:',this.form.controls['email'].value);
//console.log('passw:',this.form.controls['pass'].value);
}

  }
  resetForm(){}

//   AsyconfirmValidator(control:AbstractControl):Promise<any>|Observable<any>{
//   const promise=new Promise<any>((resolve,reject)=>{
//   setTimeout(() => {
//     if(control.value!==this.password){
//       resolve({'MATCHING_ERROR':true}) ;
//         }else
//         resolve(null);
//   }, 4000);
//   });
//   return promise;
// }
confirmValidator(control:AbstractControl):{[key:string]:boolean}|null{
  if(control.value!==this.password){
return {'MATCHING_ERROR':true};
  }
  return null;

}



}
