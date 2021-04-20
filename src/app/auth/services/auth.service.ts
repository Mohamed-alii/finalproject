import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { ClearUser, GetUser } from 'src/app/store/user.action';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token
  errorMessage



  constructor(private fireBaseAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store<{ user }>,
    private Http: HttpClient,
    private route: Router) {

    if (localStorage.getItem("token")) {
      this.token = JSON.parse(localStorage.getItem("token"))
      this.getInfo()
  }
  }

  signUp(email, password) {
    return this.fireBaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        this.token = res.user.uid
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.route.navigate(['/profile-form']);
      })
  }

  signIn(email, password) {
    return this.fireBaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.token = res.user.uid;
        this.getInfo()
        this.route.navigate(['/home']);
      })
  }

  logout() {
 //   this.route.navigate(['/home']);
    this.store.dispatch(new ClearUser())
  this.store.select("user").subscribe(data =>{console.log(data)})
    // this.token = undefined
    localStorage.removeItem("token")
    this.fireBaseAuth.signOut()
  
}
  getInfo() {
    //this.firestore.collection('users').valueChanges().subscribe(data => console.log(data));
    let user;
 
    this.firestore.collection('users').doc(this.token).valueChanges().subscribe(data => {
      if (data) {
        user = data
        this.store.dispatch(new GetUser(user))
      
      }

    })
  }
  setUserInfo(photo, fName, lName = null, age = null, weight = null, phone = null, height = null) {
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

  facebookLogin() {

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        localStorage.setItem('token', JSON.stringify(user.uid))
        this.token = user.uid
        this.setUserInfo(user.photoURL, user.displayName)
        this.getInfo()
        this.route.navigate(['/profile-form']);

      })
      .catch((error) => {
        console.log(error)
      });
  }

}
