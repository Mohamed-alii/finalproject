import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  @ViewChild('favBUTTON') favBUTTON: ElementRef;

  recipeId;
  recipe; // contains all the recipe data
  recipeDishsLength;
  recipeSummary;
  recipeDietLength;
  igredientsImgprefix;
  equipmentImgprefix;
  isFavorite:boolean = false; // if true => this means that this recipe is Favorite for the user and vice versa


  constructor(private foodServiceService:FoodServiceService , private activatedRoute:ActivatedRoute) {

    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');


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

    if(this.isFavorite){
      // here this recipe is already a favorite one and the user wants to remove it so he clicked remove 
      // show the add to Favorite button 
      this.favBUTTON.nativeElement.innerHTML = 'Add to favorites <i class="fas fa-heart text-white"></i>';
      this.favBUTTON.nativeElement.style.backgroundColor = "green";
      this.isFavorite = false;


    }else{
      // here this recipe not a favorite one and the user wants to add it to favorites so he clicked add 
      // show the remove to Favorite button 
      this.favBUTTON.nativeElement.innerHTML = 'Remove from favorites <i class="fas fa-heart text-white"></i>';
      this.favBUTTON.nativeElement.style.backgroundColor = "red";
      this.isFavorite = true;

    }

    const favourateRecipe = {
      title:String = this.recipe.title,
      image:String = this.recipe.image,
      id:Number = this.recipe.id,
    }



   }

  ngOnInit(): void {
  }
  

}
