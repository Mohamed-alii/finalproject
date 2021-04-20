import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-ovo-vegetarian',
  templateUrl: './ovo-vegetarian.component.html',
  styleUrls: ['./ovo-vegetarian.component.css']
})
export class OvoVegetarianComponent implements OnInit {

  ovoVegetarianRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getOvoVegetarianRecipes().subscribe( (data) => {

      this.ovoVegetarianRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
