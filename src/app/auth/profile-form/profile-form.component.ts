import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
// import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent implements OnInit {

  constructor() { }
 profileForm = new FormGroup({
  datePic : new FormControl(''),
  firstName : new FormControl(''),
  lastName : new FormControl(''),
  height : new FormControl('', [ Validators.pattern('[0-9]{2}$')]),
  weight : new FormControl('', [Validators.pattern('[0-9]{3}$')]),
  phoneNumber : new FormControl('', [Validators.pattern('[0-9]{11}$')])
 })
 sendProfileData(){}

 onImageChange(event) { 
   console.log(event);
 }
 get profileControls(){
  return this.profileForm.controls;
}
  ngOnInit(): void {
  }
  submitRegisterForm(){
    console.log(this.profileForm.value);
  }
  config2: ImagePickerConf = {
    borderRadius: "50%",
    language: "es",
    width: "9rem",
    height: "9rem"
  };

  // imagePickerConf: ImagePickerConf = {
  //   borderRadius: "4px",
  //   language: "en",
  //   width: "100%",
  //   height: "10rem",
  // };

  // imagePickerConf: ImagePickerConf = {
  //   borderRadius: "4px",
  //   language: "en",
  //   width: "320px",
  //   height: "240px",
  // };
  // config1: ImagePickerConf = {
  //   borderRadius: "16px",
  //   language: "en",
  // };

  // config3: ImagePickerConf = {
  //   borderRadius: "4px",
  //   language: "en",
  // };
  // initialImage = "https://havanatursa.com/assets/images/carousel/Hoteles.webp";
  
}

