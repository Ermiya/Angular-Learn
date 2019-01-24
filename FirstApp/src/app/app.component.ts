import {Component, Input} from '@angular/core';
import {Register} from './models/Register';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appComponents.html',
  styles: [
    `
      .ng-valid[required],
      ng-valid.required {
        border: 1px solid green;
      }
      .ng-invalid:not(form)[class~='ng-touched'] {
        border: 1px solid red;
      }
    `,
  ],
})
export class AppComponent {
  //  name = 'Angular';
  //  age=34;
  //  colors:string[]=['red','yellow','green','blue'];

  //  number: number = 0;

  //  myName:string="farshid";
  register: Register;
  save(_register: any) {

    this.register = new Register(_register.value.username,_register.value.password,_register.value.email,_register.value.address);

    console.log(this.register);
  }
}
