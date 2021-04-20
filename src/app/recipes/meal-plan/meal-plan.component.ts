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


  constructor(private foodServiceService:FoodServiceService) { }

    search(){

      // we check here if the user checked day or week
      if(this.dayButton.checked){
        this.planTimeFrame = 'day';
      }else{
        this.planTimeFrame = 'week';
      }


      //here we check if the user have not entered a value
      if(this.targetCalories.value != "" )
      {

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

    

     }

   

  ngOnInit(): void {

    this.targetCalories = document.getElementById("target-calories");
    this.dayButton = document.getElementById("day");

  }

}
