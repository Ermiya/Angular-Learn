import { Component , Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appComponents.html',
})
export class AppComponent  {

   name = 'Angular First APP 2';
   age=34;
   colors:string[]=['red','yellow','green','blue'];
  
  }
