import { Component , Input } from '@angular/core';


@Component({
  selector: 'myComponent',
  templateUrl: '/app/templates/MyComponent.html',
  styleUrls: ['app/Content/MyComponent.css']
})
export class MyComponent {
  @Input() message: string;
@Input() mycolors: string[];


  name: string;
  family: string;
  names: string[] = ['Iman Madaeny' , 'Ali mohammadi' , 'Sara Ahmadi' , 'Reza Alizadeh'];

  constructor()
  {
    this.name = 'Parham';
    this.family = 'Madaeny';
  }
}
