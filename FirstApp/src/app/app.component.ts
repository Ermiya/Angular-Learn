import { Component } from '@angular/core';
import { Register } from './models/Register';
import { Validators , FormGroup , FormControl , FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appCoponent.html',
})
export class AppComponent  {
register: Register;

username =  new FormControl('',[
  Validators.required ,
  Validators.minLength(5)
]);
password = new FormControl('',[
  Validators.required
]);
email = new FormControl('',[
  Validators.required
]);
address = new FormControl('');


registerForm : FormGroup = this.builder.group({
username : this.username,
password : this.password,
email: this.email,
address: this.address
});


constructor(private builder: FormBuilder)
{

}

save()
{
console.log(this.registerForm.value);

}
}
