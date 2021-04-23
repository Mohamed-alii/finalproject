import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRecipesComponent } from './general-recipes/general-recipes.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { AppRoutingModule } from '../app-routing.module';
import { KetogenicComponent } from './ketogenic/ketogenic.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { LactoVegetarianComponent } from './lacto-vegetarian/lacto-vegetarian.component';
import { OvoVegetarianComponent } from './ovo-vegetarian/ovo-vegetarian.component';
import { VeganComponent } from './vegan/vegan.component';
import { GlutenFreeComponent } from './gluten-free/gluten-free.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { SideDishComponent } from './side-dish/side-dish.component';
import { SaladComponent } from './salad/salad.component';
import { SnackComponent } from './snack/snack.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { SearchComponent } from './search/search.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user.reducer';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GeneralRecipesComponent,
    RecipeInfoComponent,
    KetogenicComponent,
    VegetarianComponent,
    LactoVegetarianComponent,
    OvoVegetarianComponent,
    VeganComponent,
    GlutenFreeComponent,
    MainCourseComponent,
    SideDishComponent,
    SaladComponent,
    SnackComponent,
    BreakfastComponent,
    SearchComponent,
    MealPlanComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ user: userReducer }),
   
  ],
  exports: [
    GeneralRecipesComponent,
    RecipeInfoComponent,
    KetogenicComponent,
    VegetarianComponent,
    LactoVegetarianComponent,
    OvoVegetarianComponent,
    VeganComponent,
    GlutenFreeComponent,
    MainCourseComponent,
    SideDishComponent,
    SaladComponent,
    SnackComponent,
    BreakfastComponent,
    SearchComponent,
    MealPlanComponent
  ]
})
export class RecipesModule { }
