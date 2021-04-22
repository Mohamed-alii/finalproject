import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-lacto-vegetarian',
  templateUrl: './lacto-vegetarian.component.html',
  styleUrls: ['./lacto-vegetarian.component.css']
})
export class LactoVegetarianComponent implements OnInit {

  lactoVegetarianRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getLactoVegetarianRecipes().subscribe( (data) => {

      this.lactoVegetarianRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
