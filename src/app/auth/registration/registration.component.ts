import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firebaseError

registForm : FormGroup;

  constructor(private auth : AuthService ) {  
    this.registForm = new FormGroup({
      Email : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Pass : new FormControl('', [Validators.required , Validators.minLength(6)]),
      confirmPass : new FormControl('', [Validators.required])
    });
  }
  get registControls(){
    return this.registForm.controls;
  }
  ngOnInit(): void {
  }
  submitRegisterForm() {
    const email = this.registForm.get("Email").value
    const password = this.registForm.get("Pass").value
    console.log(email, password)
    this.auth.signUp(email, password).catch(error => {
      this.firebaseError = error.message
      //console.log(this.errorMessage)
    })

  }


}

// function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
//           return;
//       }

      // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ mustMatch: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// }




export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}