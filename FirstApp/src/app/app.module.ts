import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyComponent} from './MyComponents/myComponent'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
