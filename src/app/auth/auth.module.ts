import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { NgpImagePickerModule } from 'ngp-image-picker';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ProfileFormComponent
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
    SharedModule
  ],
  exports:[LoginComponent,
  RegistrationComponent, ProfileFormComponent]
})
export class AuthModule { }
