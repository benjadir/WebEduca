import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component:  SigninComponent,
      },
      {
        path: 'register',
        component: SignupComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

})
export class AuthRoutingModule { }
