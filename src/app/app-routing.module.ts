import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRecipesComponent  } from './recipes/general-recipes/general-recipes.component';
import { RecipeInfoComponent } from './recipes/recipe-info/recipe-info.component';
import { GlutenFreeComponent } from './recipes/gluten-free/gluten-free.component';
import { KetogenicComponent } from './recipes/ketogenic/ketogenic.component';
import { LactoVegetarianComponent } from './recipes/lacto-vegetarian/lacto-vegetarian.component';
import { OvoVegetarianComponent } from './recipes/ovo-vegetarian/ovo-vegetarian.component';
import { VeganComponent } from './recipes/vegan/vegan.component';
import { VegetarianComponent } from './recipes/vegetarian/vegetarian.component';
import { MainCourseComponent } from './recipes/main-course/main-course.component';
import { SideDishComponent } from './recipes/side-dish/side-dish.component';
import { SaladComponent } from './recipes/salad/salad.component';
import { BreakfastComponent } from './recipes/breakfast/breakfast.component';
import { SnackComponent } from './recipes/snack/snack.component';
import { SearchComponent } from './recipes/search/search.component';
import { MealPlanComponent } from './recipes/meal-plan/meal-plan.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileFormComponent } from './auth/profile-form/profile-form.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './main/home/home.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { ContactUsComponent } from './auth/contact-us/contact-us.component';







const routes: Routes = [
  {path:"" , redirectTo:"home" ,pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'profile-form', component: ProfileFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {path:"generalRecipes" , component:GeneralRecipesComponent},
  {path:"glutenFreeRecipes" , component:GlutenFreeComponent},
  {path:"ketogenicRecipes" , component:KetogenicComponent},
  {path:"vegetarianRecipes" , component:VegetarianComponent},
  {path:"lactovegetarianRecipes" , component:LactoVegetarianComponent},
  {path:"ovoVegetarianRecipes" , component:OvoVegetarianComponent},
  {path:"veganRecipes" , component:VeganComponent},
  {path:"mainCourse" , component:MainCourseComponent},
  {path:"sideDish" , component:SideDishComponent},
  {path:"salad" , component:SaladComponent},
  {path:"breakfast" , component:BreakfastComponent},
  {path:"ContactUs" , component:ContactUsComponent},
  {path:"snack" , component:SnackComponent },
  { path:"mealPlan", component: MealPlanComponent, canActivate :[AuthGuardGuard]},
  {path:"recipeInfo/:id" , component:RecipeInfoComponent},
  {path:"search/:query" , component:SearchComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
