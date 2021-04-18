import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user;
  constructor(private store: Store<{ user }>) {
    this.store.select("user").subscribe(data => {
        this.user = data.user
    
    })


  }



}
