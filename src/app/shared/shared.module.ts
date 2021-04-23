
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports :[FooterComponent , ModalComponent]
})
export class SharedModule { }
