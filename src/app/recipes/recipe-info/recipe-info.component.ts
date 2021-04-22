import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipeId;
  recipe; // contains all the recipe data
  recipeDishsLength;
  recipeSummary;
  recipeDietLength;
  igredientsImgprefix;
  equipmentImgprefix;


  constructor(private foodServiceService:FoodServiceService , private activatedRoute:ActivatedRoute , private Auth : AuthService) {

    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.recipeId)

    this.foodServiceService.getRecipeInfo(this.recipeId).subscribe( (data) => { 

    this.recipe = data;
    this.igredientsImgprefix = foodServiceService.igredientsImgprefix;
    this.equipmentImgprefix = foodServiceService.equipmentImgprefix;
    this.recipeDishsLength = data.dishTypes.length;
    this.recipeDietLength = data.diets.length;
    this.recipeSummary = data.summary;


     } )

   }

   addToFavourate(){

    const favourateRecipe = {
      title: this.recipe.title,
      image:  this.recipe.image,
      id : this.recipe.id,
    }
    //Mostafa Start here
     console.log(favourateRecipe)
     this.Auth.setFavMeal(favourateRecipe)

   }

  ngOnInit(): void {
  }

}
