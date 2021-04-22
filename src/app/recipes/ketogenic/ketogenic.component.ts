import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-ketogenic',
  templateUrl: './ketogenic.component.html',
  styleUrls: ['./ketogenic.component.css']
})
export class KetogenicComponent implements OnInit {

  ketogenicRecipes :Array<any>;


  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getKetogenicRecipes().subscribe( (data) => {

      this.ketogenicRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
