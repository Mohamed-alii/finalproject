import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isLogedIn = false;

  constructor(private store: Store<{ user }>) {
    this.store.select('user').subscribe(data => this.isLogedIn = data.login)
    console.log(this.isLogedIn ,"from guard")
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isLogedIn) {
      return true;
    }

  }

}
