import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CustomFabarsDirective } from './custom-fabars.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderAuthComponent,
    CustomFabarsDirective
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[ CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    CustomFabarsDirective
]
})
export class HeadersModule { }
