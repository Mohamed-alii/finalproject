import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToFav } from 'src/app/store/user.action';
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
 
  }

 addFav() {
   this.store.select("user").subscribe(data => console.log(data.fav))   
   this.auth.setFavMeal({
     title: "Soy Ginger Glazed Halibut w/ Ginger Peach Relish",
     image: "https://spoonacular.com/recipeImages/660736-556x370.jpg",
     id: 660736
   })
  }

}
