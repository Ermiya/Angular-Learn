import { Component, Input } from '@angular/core';

@Component({
  selector: 'myComponent',
  // template :'<h1> This is my components</h1> ',
  templateUrl: '/app/templates/MyTemplate.html',
  styleUrls: ['app/Content/MyComponent.css']

})

export class MyComponent {
  @Input() message: string;
  @Input() mycolors: string[];


  name: string;
  family: string;
  names: string[] = ["ali", "farhad", "saeid"]

  constructor() {
    this.name = 'ermiya';
    this.family = 'saeidi'
  };



}
