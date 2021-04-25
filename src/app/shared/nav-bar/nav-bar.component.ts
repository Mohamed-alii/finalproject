import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isHomePage: boolean = false;
  isSmallScreen: boolean = false;
  isLoginUser: boolean = false;
  isPlanClicked = false
  message = "You must login first to make your meals plan"
  user

  @ViewChild('navbarMenu') navbarMenu: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('navbar') navbar: ElementRef;

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:location', ['$event'])




  onWindowScroll(e) {

    if(window.location.pathname == "/home" || window.location.pathname == "/"){
      // transparent navbar
      if (window.pageYOffset > (window.screen.availHeight - 200)) {

        this.navbar.nativeElement.style.backgroundColor = "rgba(40, 167, 69, 0.9)";

      } else {

        if (window.outerWidth <= 768) {
          this.navbar.nativeElement.style.backgroundColor = "rgba(40, 167, 69, 0.9)";
        } else {
          this.navbar.nativeElement.style.backgroundColor = "transparent";
        }

      }
    }// else it any other page we need it green as it is

  }

  constructor(private router: Router,
    private location: Location,
    private auth: AuthService,
    private store: Store<{ user }>
  ) {

    if (window.location.pathname == "/home" || window.location.pathname == "/") {
      this.isHomePage = true;
    }

    if (window.screen.availWidth < 500) {
      this.isSmallScreen = true;
    }

    this.location.onUrlChange((url: string, state: unknown) => {

      if (window.location.pathname == "/home" || window.location.pathname == "/") {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    })

    // Mostafa start here /******************/
    this.auth.getInfo()
    this.store.select("user").subscribe(data => {
      console.log(data.login)
      this.isLoginUser = data.login
      this.user = data.user
    })
  }

  ngOnInit(): void {
  }

  profileToggle() {

    this.navbarMenu.nativeElement.classList.toggle('active');

  }

  search() {


    // check if its empty 
    if (this.searchInput.nativeElement.value != "") {
      // write the search query in path and  navigate to search component 
      //this.router.navigate(['/search' , this.searchInput.nativeElement.value]);

      // we used this to reload the search component so we get the new query the user has entered
      // this.router.navigate(['/search', this.searchInput.nativeElement.value])
      //   .then(() => {
      //     window.location.reload();
      //   });
      // this.router.navigate([`search/${this.searchInput.nativeElement.value}`])
      // .then(() => {
      //   window.location.reload();
      // });


      // here we update the page without reloading the whole website :D
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([`/search/${this.searchInput.nativeElement.value}`]);
    });

    }

    // else do nothing


  }
// Mostafa start here /**************/
  logout() {
    this.auth.logout()
    this.isPlanClicked = false
  }
  onOpenAlert() {
    this.isPlanClicked = true
  }
  onCloseAlert() {
    this.isPlanClicked = false
    console.log(this.isPlanClicked , " click")

  }


}
