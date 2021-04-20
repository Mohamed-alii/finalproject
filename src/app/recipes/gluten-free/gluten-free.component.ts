import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-gluten-free',
  templateUrl: './gluten-free.component.html',
  styleUrls: ['./gluten-free.component.css']
})
export class GlutenFreeComponent implements OnInit {

  glutenFreeRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getGlutenFreeRecipes().subscribe( (data) => {

      this.glutenFreeRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
