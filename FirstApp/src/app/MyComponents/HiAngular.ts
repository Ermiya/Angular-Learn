import { Component } from '@angular/core';

@Component({
  selector: 'hiangular',
  templateUrl: '/app/templates/HiAngular.html',
  styleUrls: ['app/Content/MyComponent.css']
})
export class HiAngularComponent{
  mystyle: string = 'black';
  dynamicClass: string = 'danger';
  count: number = 1;
  isActive: boolean = false;
  people: any[];
  myswitch: number =0;

constructor()
{
  this.people = [
{name : 'Iman' , family : 'Madaeny', age : 30},
{name : 'Ali' , family : 'Alizadeh', age : 40},
{name : 'Sara' , family : 'Ahmadi', age : 18}
  ];
}

  active()
  {
    this.isActive = !this.isActive;
  }
}
