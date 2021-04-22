import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.css']
})
export class VeganComponent implements OnInit {

  veganRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getVeganRecipes().subscribe( (data) => {

      this.veganRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
