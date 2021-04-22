import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesModule } from './recipes/recipes.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { NavbarComponent } from './navbar/navbar.component';
import{ SharedModule} from './shared/shared.module';
import{MainModule} from './main/main.module';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    RecipesModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ user: userReducer }),
    SharedModule,
    MainModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
