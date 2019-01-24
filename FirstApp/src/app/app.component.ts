import { Component, Input } from '@angular/core';
import { Register } from './models/Register';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appComponents.html',
  // styles: [`
  //     .ng-valid[required],
  //     ng-valid.required {
  //       border: 1px solid green;
  //     }
  //     .ng-invalid:not(form)[class~='ng-touched'] {
  //       border: 1px solid red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  //  name = 'Angular';
  //  age=34;
  //  colors:string[]=['red','yellow','green','blue'];

  //  number: number = 0;

  //  myName:string="farshid";
  //register: Register;
  // save(_register: any) {

  // //Driven form
  // this.register = new Register(_register.value.username, _register.value.password, _register.value.email, _register.value.address);
  // //
  // console.log(this.register);
  //}

  register: Register;

<<<<<<< HEAD
    this.register = new Register(_register.value.username,_register.value.password,_register.value.email,_register.value.address);
<<<<<<< HEAD
<<<<<<< HEAD

=======
//
>>>>>>> parent of 5faf6a3... End 19 Reactive Form
=======
//
>>>>>>> parent of 5faf6a3... End 19 Reactive Form
    console.log(this.register);
=======
  username = new FormControl('',[
    Validators.required,
    Validators.minLength(4)
  
  ]);
  password = new FormControl('',[
    Validators.required
  
  ]);
  email = new FormControl('',[
    Validators.required
  
  ]);
  address = new FormControl('');

  registerForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password,
    email: this.email,
    address: this.address
  })

  constructor(private builder: FormBuilder) {

  }
  save(_register: any) {
    console.log(this.registerForm.value);
>>>>>>> parent of 169f7f6... .
  }

}
