
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TopscrollComponent } from './topscroll/topscroll.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    TopscrollComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[
    FooterComponent,
    NavBarComponent,
    TopscrollComponent
  ]
})
export class SharedModule { }
