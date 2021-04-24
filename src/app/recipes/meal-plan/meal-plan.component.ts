import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
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

  requestsWorking:boolean = true;
  emptyErrorMsg:boolean = false;
  nanErrorMsg:boolean = false;
  rangeErrorMsg:boolean = false;



  constructor(private foodServiceService:FoodServiceService) { }

    search(){


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
        if( parseInt(this.targetCalories.value) > 3000 || parseInt(this.targetCalories.value) <= 0 ){
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
                
                      setTimeout(function(){
                        window.scrollTo(0,700)
                      }, 500);
                      
            
                      } ,
                      (err) => {
                        // 402 => requests limit finished
                        if(err.error.code == 402){
                          console.log(err.error.code)
                          this.requestsWorking = false;

                        }
                      } );
                    break;
                  case 'day':
                    this.foodServiceService.getMealPlan( 'day' , this.targetCalories.value ).subscribe( (data) => {
            
                      this.mealPlan = data;
                
                      setTimeout(function(){
                        window.scrollTo(0,700)
                         }, 3000);
                
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
