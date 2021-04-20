import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/services/auth.service';
import { GetUser } from '../store/user.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  token = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('sticky-nav');
    }else {
      element.classList.remove('sticky-nav');
    }
  }
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
  }
 
  logout() {
    this.auth.logout()
  }










}
