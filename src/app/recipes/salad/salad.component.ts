import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';


@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {

  saladRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getSaladRecipes().subscribe( (data) => {

      this.saladRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
