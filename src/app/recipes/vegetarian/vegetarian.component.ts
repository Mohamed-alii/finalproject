import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-vegetarian',
  templateUrl: './vegetarian.component.html',
  styleUrls: ['./vegetarian.component.css']
})
export class VegetarianComponent implements OnInit {

  vegetarianRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getVegetarianRecipes().subscribe( (data) => {

      this.vegetarianRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
