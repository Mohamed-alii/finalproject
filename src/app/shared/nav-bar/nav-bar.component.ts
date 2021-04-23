import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  @ViewChild('navbarMenu') navbarMenu: ElementRef;


  constructor() { 

    

  }

  ngOnInit(): void {
  }

  profileToggle(){

    this.navbarMenu.nativeElement.classList.toggle('active');


  }
  

}
