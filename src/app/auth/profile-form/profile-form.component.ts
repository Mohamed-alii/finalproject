import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { AuthService } from '../services/auth.service';
// import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent implements OnInit {
  photoLink
  constructor(private auth: AuthService) { }
  profileForm = new FormGroup({
    datePic: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required])
  })
  sendProfileData() {
    const firstName = this.profileForm.get("firstName").value
    const lastName = this.profileForm.get("lastName").value
    const datePic = 2021- this.profileForm.get("datePic").value.getFullYear()
    const weight = this.profileForm.get("weight").value
    const phoneNumber = this.profileForm.get("phoneNumber").value
    const height = this.profileForm.get("height").value

    this.auth.setUserInfo(this.photoLink , firstName, lastName, datePic, weight, phoneNumber, height)




  }

  onImageChange(event) {
    this.photoLink = event
  }

  ngOnInit(): void {
  }
  config2: ImagePickerConf = {
    borderRadius: "50%",
    language: "es",
    width: "10rem",
    height: "10rem"
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

