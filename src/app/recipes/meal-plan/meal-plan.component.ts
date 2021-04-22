import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit {

  mealPlan:Array<any>;
  dayButton;
  planTimeFrame;
  targetCalories;
  prefixImgSrc="https://spoonacular.com/recipeImages/";
  imgSize="-556x370.jpg";

  emptyErrorMsg:boolean = false;
  nanErrorMsg:boolean = false;
  rangeErrorMsg:boolean = false;


  constructor(private foodServiceService:FoodServiceService) { }

    search(){

      console.log(typeof (parseInt(this.targetCalories.value)) , parseInt(this.targetCalories.value))
      // we check here if the user checked day or week
      if(this.dayButton.checked){
        this.planTimeFrame = 'day';
      }else{
        this.planTimeFrame = 'week';
      }

      if(this.targetCalories.value == ""){
        // empty input form the user
        this.emptyErrorMsg = true;
        this.nanErrorMsg = false;
        this.rangeErrorMsg = false;

      }else if(isFinite( parseInt(this.targetCalories.value) )){
        // here the user entered a number so we need to check if the nuber is less than 3500 or not
        if( parseInt(this.targetCalories.value) > 3500 || parseInt(this.targetCalories.value) <= 0 ){
          // show error
        this.emptyErrorMsg = false;
        this.nanErrorMsg = false;
        this.rangeErrorMsg = true;

        }else{
          // the user has entered a right number of calories
          // hide errors
          this.emptyErrorMsg = false;
          this.nanErrorMsg = false;
          this.rangeErrorMsg = false;
          // get the results 

          switch (this.planTimeFrame) {
                  case 'week':
                    this.foodServiceService.getMealPlan( 'week' , this.targetCalories.value ).subscribe( (data) => {
            
                      this.mealPlan = data.week;
                
                      console.log(this.mealPlan)
            
                      } );
                    break;
                  case 'day':
                    this.foodServiceService.getMealPlan( 'day' , this.targetCalories.value ).subscribe( (data) => {
            
                      this.mealPlan = data;
                
                      console.log(this.mealPlan)
                
                      } );
                    break;
            
                }
          }

      }else{
        // the user has entered text not a number
        // show error msg
        this.emptyErrorMsg = false;
        this.nanErrorMsg = true;
        this.rangeErrorMsg = false;
      }

      // end of search fun
    }
   

  ngOnInit(): void {

    this.targetCalories = document.getElementById("target-calories");
    this.dayButton = document.getElementById("day");

  }

}