import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user.reducer';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { NgpImagePickerModule } from 'ngp-image-picker';
import { ContactUsComponent } from './contact-us/contact-us.component';

                  

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileFormComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgpImagePickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({ user: userReducer }),
    SharedModule
  ],

  exports: [ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileFormComponent,
    ContactUsComponent,
  ]

})
export class AuthModule { }
