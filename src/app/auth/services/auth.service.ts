import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AddToFav, ClearFav, ClearUser, GetUser, isLogin } from 'src/app/store/user.action';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token
  errorMessage



  constructor(
    private fireBaseAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store<{ user }>,
    private Http: HttpClient,
    private route: Router
  ) {
    if (localStorage.getItem("token")) {
      this.token = JSON.parse(localStorage.getItem("token"))
    }
  }


  signUp(email, password) {
    console.log("sign up run")
    return this.fireBaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.token = res.user.uid
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.route.navigate(['/profile-form']);
      })
  }

  signIn(email, password) {
    console.log("sign in run")
    return this.fireBaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.token = res.user.uid;
        this.getInfo()
        this.route.navigate(['/home']);
      })
  }

  logout() {
    console.log("logout run")
    this.store.dispatch(new ClearUser())
    this.store.dispatch(new isLogin(false))
    localStorage.removeItem("token")
    this.route.navigate(['/home']);
    this.store.dispatch(new ClearFav())
    this.store.select("user").subscribe(data => console.log(data))
    // this.fireBaseAuth.signOut()
  }

  setUserInfo(photo, fName, lName = null, age = null, weight = null, phone = null, height = null) {
    console.log("setuser run")
    this.firestore.collection("users").doc(this.token).set({
      photo: photo,
      fName: fName,
      lName: lName,
      age: age,
      weight: weight,
      phone: phone,
      height: height,
    })
    this.getInfo()
    this.route.navigate(['/home']);
  }

  getInfo() {
    console.log("getinfo run")
    let user;
    let meals;

    //get user data
    this.firestore.collection('users').doc(this.token).valueChanges().subscribe(data => {
      if (data) {
        user = data
        this.store.dispatch(new GetUser(user))
        this.store.dispatch(new isLogin(true))
      }
    })

    if (this.token != undefined) {
      this.firestore.collection('meals').doc(this.token).collection(this.token).get().subscribe(data => {
        let meals: {}[] = []
        data.docs.forEach(doc => {
          let meal: {} = {
            ...doc.data(),
            uid: doc.id
          }
          meals.push(meal)
        })
        this.store.dispatch(new AddToFav(meals))
      })
    }
  }




  setFavMeal(meal) {
    this.firestore.collection("meals").doc(this.token).collection(this.token).add(meal)
    this.firestore.collection('meals').doc(this.token).collection(this.token).get().subscribe(data => {
      let meals: {}[] = []
      data.docs.forEach(doc => {
        let meal: {} = {
          ...doc.data(),
          uid: doc.id
        }
        meals.push(meal)
      })
      this.store.dispatch(new AddToFav(meals))
    })

  }
  removeFav(meal) {
    this.firestore.collection('meals').doc(this.token).collection(this.token).doc(meal.uid).delete()
  }



  facebookLogin() {
    console.log(" face run")
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        localStorage.setItem('token', JSON.stringify(user.uid))
        this.token = user.uid
        this.setUserInfo(user.photoURL, user.displayName)
        this.route.navigate(['/profile-form']);
      })
      .catch((error) => {
        console.log(error)
      });
  }

}
