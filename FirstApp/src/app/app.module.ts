import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { MyComponent } from './MyComponents/MyComponent';
import { CounterComponent } from './MyComponents/counter';
import { HiAngularComponent } from './MyComponents/HiAngular';

@NgModule({
  imports:      [ BrowserModule , ReactiveFormsModule ],
  declarations: [ AppComponent , MyComponent , CounterComponent , HiAngularComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
