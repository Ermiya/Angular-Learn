import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} Age {{age}}</h1> <br> <myComponent></myComponent>`,
})
export class AppComponent  { name = 'Angular First APP 2';age=34 }
