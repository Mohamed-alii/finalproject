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
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgpImagePickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({ user: userReducer }),
    SharedModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBNJg3AA8dwehDpWcM2-ECO8PxatNGL3uo",
      authDomain: "kitchen-jungle.firebaseapp.com",
      databaseURL: "https://kitchen-jungle-default-rtdb.firebaseio.com",
      projectId: "kitchen-jungle",
      storageBucket: "kitchen-jungle.appspot.com",
      messagingSenderId: "89307112077",
      appId: "1:89307112077:web:d4bb593ac5aae682cdb8c4",
      measurementId: "G-KCVN6ZB4QQ"
    }),

  ],

  exports: [ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileFormComponent
  ],
  providers : [AuthService]

})
export class AuthModule { }
