import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm : FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      Email : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Comment : new FormControl('', [Validators.required])
    });
   }
  get contactControls(){
    return this.contactForm.controls;
  }
  ngOnInit(): void {
  }
  submitContactForm(){
    console.log(this.contactForm.value);
  }
}
