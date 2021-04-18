import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firebaseError;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  triggerInputChange(event) {
    console.log(event.target.value);
  }
  loginFormSubmit(form) {
    const email = form.controls.email.value
    const password = form.controls.pass.value
    this.auth.signIn(email, password).catch(error => {
      this.firebaseError = error.message
      //console.log(this.errorMessage)
    })
    this.auth.facebookLogin()
  }



  
}
