import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user;
  constructor(private store: Store<{ user }>, private auth: AuthService) {
    this.store.select("user").subscribe(data => {
      this.user = data.user

    })
    this.auth.getInfo()

  }



}
