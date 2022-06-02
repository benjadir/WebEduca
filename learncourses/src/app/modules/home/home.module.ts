import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { LandingComponent } from './index/landing/landing.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
  CoursesComponent,
    HomeComponent,
    ServicesComponent,
    BlogComponent,
    AboutComponent,
    IndexComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
