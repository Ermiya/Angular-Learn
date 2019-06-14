import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defualtQuestion = 'teacher';
  answer = '';
  genders = ['مرد', 'زن'];
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   gender: '',
    //   secret: '',
    //   questionAnswer: ''
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted = true
    this.user.username = this.signupForm.form.value.userData.username
    this.user.email = this.signupForm.form.value.userData.email
    this.user.secret = this.signupForm.form.value.secret
    this.user.questionAnswer = this.signupForm.form.value.questionAnswer
    this.user.gender = this.signupForm.form.value.gender

    this.signupForm.reset()
  }
}
