import { Component , Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appComponents.html',
})
export class AppComponent  {

   name = 'Angular';
   age=34;
   colors:string[]=['red','yellow','green','blue'];

   number: number = 0;
  
   myName:string="farshid";
  }
