import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-topscroll',
  templateUrl: './topscroll.component.html',
  styleUrls: ['./topscroll.component.css']
})
export class TopscrollComponent implements OnInit {

  @ViewChild('scrollUp') scrollUp: ElementRef;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    if(window.pageYOffset > 500){
      // show the button
      this.scrollUp.nativeElement.style.visibility = "visible";
      this.scrollUp.nativeElement.style.opacity = "1";
    }else{
      this.scrollUp.nativeElement.style.visibility = "hidden";
      this.scrollUp.nativeElement.style.opacity = "0";
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollBtn(){

    window.scrollTo( 0 , 0);

  }

}
