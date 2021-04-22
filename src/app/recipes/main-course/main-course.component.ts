import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css']
})
export class MainCourseComponent implements OnInit {

  mainCourseRecipes :Array<any>;

  constructor(private foodServiceService:FoodServiceService) {

    this.foodServiceService.getMainCourseRecipes().subscribe( (data) => {

      this.mainCourseRecipes = data.recipes;

    } )

   }

  ngOnInit(): void {
  }

}
