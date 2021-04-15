import { Injectable } from '@angular/core';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token


  constructor() { }


  async signUp(email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.token = res.user.uid;
      //  this.getInfo()
      }).catch(error => {
        console.log(error)
      })
  }


  async singIn(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.user.uid))
        this.token = res.user.uid;
      //  this.getInfo()
      }).catch(error => {
        console.log(error)
      })
  }


  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });




}

}
