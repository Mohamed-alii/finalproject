import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-side-dish',
  templateUrl: './side-dish.component.html',
  styleUrls: ['./side-dish.component.css']
})
export class SideDishComponent implements OnInit {

  sideDishRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getSideDishRecipes().subscribe( (data) => {

      this.sideDishRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
