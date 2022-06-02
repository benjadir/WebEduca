import { TestInterceptor } from './core/test.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersModule } from './partials/headers/headers.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//providers: [{provide:HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true}],
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeadersModule,
    SharedModule,
    HttpClientModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
