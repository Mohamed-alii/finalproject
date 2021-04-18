import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata : FormGroup;
  bmival;
  bmimessage;

  constructor(private fb : FormBuilder) {
    this.userdata =this.fb.group({
      userweight :[, [Validators.required]],
      userheight :[,Validators.required],
    })
  }

  ngOnInit(): void {
    
  }
 
  bmimethod(){
    this.bmival=this.userdata.value.userweight / Math.pow( this.userdata.value.userheight,2) 
    if(this.bmival*100 <= 18.5){
      this.bmimessage = `your bni is ${this.bmival} this means  you are too thin. `
    }else if(this.bmival*100 <= 24.9){
      this.bmimessage = `your bni is ${this.bmival} this means  you are healthy.`
    }else if(this.bmival*100 > 24.9){
      this.bmimessage =`your bni is ${this.bmival} this means you have overweight.`
    }

  }


}
