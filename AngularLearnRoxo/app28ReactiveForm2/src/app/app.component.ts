import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['مرد', 'زن'];
  blockUsernames = ['roxo', 'admin'];
  signupForm: FormGroup;

ngOnInit(): void {
  this.signupForm = new FormGroup({
    userData: new FormGroup({
      username: new FormControl(null , [Validators.required, this.blockUsername.bind(this)]),
      email: new FormControl(null,[Validators.required, Validators.email],this.blockEmail),
    }),
    gender: new FormControl('مرد'),
    addresses: new FormArray([])
  });

  // this.signupForm.valueChanges.subscribe(
  //   (value)=> {console.log(value)}
  // )

  // this.signupForm.statusChanges.subscribe(
  //   (value)=> {console.log(value)}
  // );

  this.signupForm.setValue({
    userData: {
      username: 'supervisor',
      email: 'test@roxo.ir'
    },
    gender: 'مرد',
    addresses: []
  });
}

onSubmit(){
  console.log(this.signupForm);
}

onNewAddress(){
  const control = new FormControl(null, Validators.required);
  (<FormArray> this.signupForm.get('addresses')).push(control);
}

blockUsername(control: FormControl): {[s: string]: Boolean} {
  if(this.blockUsernames.indexOf(control.value) > -1 ){
    return {nameIsBlocked: true};
  }
  return null;
}
blockEmail(control: FormControl):Observable<any> | Promise<any> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(control.value === "info@roxo.ir"){
        resolve({emailIsBlock: true});
      } else {
        resolve(null);
      }
    }, 2000)
  })
  return promise;
}

}
