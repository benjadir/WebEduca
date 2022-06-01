import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { CousesComponent } from './couses/couses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  children: [
    {
      path:'',component:IndexComponent
    },
    {
      path: 'courses',
      component: CousesComponent,
    },

    {
      path:'blog',component:BlogComponent
    },
    {
      path:'services',component:ServicesComponent
    },
    {
      path:'about',component:AboutComponent
    }

  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
