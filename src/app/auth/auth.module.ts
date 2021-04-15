import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user.reducer';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ user: userReducer})
  ],
  exports:[ProfileComponent]
})
export class AuthModule { }
