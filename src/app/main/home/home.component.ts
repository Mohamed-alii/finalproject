import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  userdata : FormGroup;
  bmival;
  bmimessage;

  constructor(private fb : FormBuilder , private auth : AuthService) {
    this.userdata =this.fb.group({
      userweight :[ null , Validators.required ],
      userheight :[ null , Validators.required],
    })

  }

  ngOnInit(): void {
    
  }
 
  bmimethod(){

    console.log(this.userdata.invalid)

    // weight / [height in meters] power (2)
    this.bmival = this.userdata.value.userweight / Math.pow( ( this.userdata.value.userheight / 100) , 2 ) 

    // Underweight = <18.5
    // Normal weight = 18.5–24.9
    // Overweight = 25–29.9
    // Obesity = BMI of 30 or greater 


    if( this.bmival < 18.5 ){
      // underweight 
      this.bmimessage = `your Body mass index is ${(this.bmival).toFixed(2)} [ underweight ] `

    }else if( this.bmival <= 24.9 ){
      // normal
      this.bmimessage = `your Body mass index is ${(this.bmival).toFixed(2)} [ normal ] `

    }else if( this.bmival < 29.9 ){
      // overweight
      this.bmimessage = `your Body mass index is ${(this.bmival).toFixed(2)} [ overweight ] `

    }else if( this.bmival >= 30 ){
      // obese
      this.bmimessage = `your Body mass index is ${(this.bmival).toFixed(2)} [ obese ] `

    }




    // if(this.bmival*100 <= 18.5){
    //   this.bmimessage = `your bmi is ${this.bmival} this means  you are too thin. `
    // }else if(this.bmival*100 <= 24.9){
    //   this.bmimessage = `your bmi is ${this.bmival} this means  you are healthy.`
    // }else if(this.bmival*100 > 24.9){
    //   this.bmimessage =`your bmi is ${this.bmival} this means you have overweight.`
    // }

  }


}
