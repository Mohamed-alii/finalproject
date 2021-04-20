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
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Vegan&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random ketogenic recipes 
  getKetogenicRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=ketogenic&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random vegetarian recipes 
  getVegetarianRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=vegetarian&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random Gluten Free recipes 
  getGlutenFreeRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Gluten%20Free&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random Lacto-Vegetarian recipes 
  getLactoVegetarianRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&diet=Lacto-Vegetarian&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get the informaion of a specific recipe
   getRecipeInfo(id ):Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=fe26a95e13b64e73946d15117dd36a89`)
  }

  // get random main course recipes 
  getMainCourseRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=main%20course&apiKey=44e6a48b78ae497bb8e4898b5f810f90 `)
  }

  // get random side dish recipes 
  getSideDishRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=side%20dish&apiKey=44e6a48b78ae497bb8e4898b5f810f90 `)
  }

  // get random salad recipes 
  getSaladRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=salad&apiKey=44e6a48b78ae497bb8e4898b5f810f90 `)
  }

  // get random breakfast recipes 
  getBreakfastRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=breakfast&apiKey=44e6a48b78ae497bb8e4898b5f810f90 `)
  }

  // get random snack recipes 
  getSnackRecipes():Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/random?number=50&tags=snack&apiKey=44e6a48b78ae497bb8e4898b5f810f90 `)
  }

  // get recipes according to users search
  getRecipesSearch(query):Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=50&apiKey=44e6a48b78ae497bb8e4898b5f810f90`)
  }

  // get meal plan
  getMealPlan(timeFrame , targetCalories):Observable<any>
  {
    return this.http.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&apiKey=cf90ee8d96ad45a68cb4c292a2aabdfa`)
  }


}
