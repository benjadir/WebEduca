import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,

    AuthRoutingModule,
    RouterModule
  ],
  exports:[RouterModule]


})
export class AuthModule { }
