import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  igredientsImgprefix:string = "https://spoonacular.com/cdn/ingredients_250x250/";
  equipmentImgprefix:string = "https://spoonacular.com/cdn/equipment_100x100/";


  constructor(private http:HttpClient ) { }


  // apiKey=fe26a95e13b64e73946d15117dd36a89 
  // apikey=7273358ac4ff4c21bb7b2da832fa7a29
  // apikey=44e6a48b78ae497bb8e4898b5f810f90 
  // apikey=cf90ee8d96ad45a68cb4c292a2aabdfa
  // apikey=90d7c4b825564263a72ef5373d0140a7
  // apikey=14a2531cbc3d4e6c94cfc160b2146388
  // apikey=845021c2f5da40f0a2b9a093308e29fd
  // apikey=d2eb44ed03834a8694a9cde352526898
  // apikey=933a0b54692b45b2abc44f6816d1b7fa
  // apikey=792673c4db2047c89d47e2dba9e43d4b
  // apikey=79b9d3439ca24515abeb98425c9614bc
  // apikey=2bc9496d04904edf890910812537d527

  
  // get random recipes 
  getGeneralRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&apiKey=cf90ee8d96ad45a68cb4c292a2aabdfa`)
  }

  // get random Ovo-Vegetarian recipes 
  getOvoVegetarianRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Ovo-Vegetarian&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random vegan recipes 
  getVeganRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Vegan&apiKey=7273358ac4ff4c21bb7b2da832fa7a29`)
  }

  // get random ketogenic recipes 
  getKetogenicRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=ketogenic&apiKey=44e6a48b78ae497bb8e4898b5f810f90`)
  }

  // get random vegetarian recipes 
  getVegetarianRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=vegetarian&apiKey=cf90ee8d96ad45a68cb4c292a2aabdfa`)
  }

  // get random Gluten Free recipes 
  getGlutenFreeRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Gluten%20Free&apiKey=90d7c4b825564263a72ef5373d0140a7`)
  }

  // get random Lacto-Vegetarian recipes 
  getLactoVegetarianRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Lacto-Vegetarian&apiKey=14a2531cbc3d4e6c94cfc160b2146388`)
  }

  // get the informaion of a specific recipe
   getRecipeInfo(id ):Observable<any>
  {
     return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=79b9d3439ca24515abeb98425c9614bc`)
  }

  // get random main course recipes 
  getMainCourseRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=main%20course&apiKey=d2eb44ed03834a8694a9cde352526898`)
  }

  // get random side dish recipes 
  getSideDishRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=side%20dish&apiKey=933a0b54692b45b2abc44f6816d1b7fa`)
  }

  // get random salad recipes 
  getSaladRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=salad&apiKey=792673c4db2047c89d47e2dba9e43d4b`)
  }

  // get random breakfast recipes 
  getBreakfastRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=breakfast&apiKey=79b9d3439ca24515abeb98425c9614bc`)
  }

  // get random snack recipes 
  getSnackRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=snack&apiKey=845021c2f5da40f0a2b9a093308e29fd`)
  }

  // get recipes according to users search
  getRecipesSearch(query):Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=50&apiKey=2bc9496d04904edf890910812537d527`)
  }

  // get meal plan
  getMealPlan(timeFrame , targetCalories):Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&apiKey=cf90ee8d96ad45a68cb4c292a2aabdfa`)
  }


}
