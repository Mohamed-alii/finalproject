import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  breakfastRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getBreakfastRecipes().subscribe( (data) => {

      this.breakfastRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
