import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { MyComponent } from './MyComponents/MyComponent';
import { CounterComponent } from './MyComponents/counter'
import { hiAngularComponent } from './MyComponents/HiAngular';

@NgModule({
  imports:      [ BrowserModule , FormsModule ,ReactiveFormsModule],
  declarations: [AppComponent, MyComponent, CounterComponent, hiAngularComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
