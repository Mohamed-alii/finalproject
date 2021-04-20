import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-general-recipes',
  templateUrl: './general-recipes.component.html',
  styleUrls: ['./general-recipes.component.css']
})
export class GeneralRecipesComponent implements OnInit {

  generalRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) { 

    this.foodServiceService.getGeneralRecipes().subscribe( (data) => {

      this.generalRecipes = data.recipes;

      console.log(this.generalRecipes)

    } )

  }

  ngOnInit(): void {
  }

}
