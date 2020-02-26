import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    Practice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
