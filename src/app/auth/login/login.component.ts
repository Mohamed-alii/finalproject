import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inpVal = "Noria";
  constructor() { }

  ngOnInit(): void {
  }
triggerInputChange(event){
  console.log(event.target.value);
}
loginFormSubmit(form){
  console.log(form);
}

}
