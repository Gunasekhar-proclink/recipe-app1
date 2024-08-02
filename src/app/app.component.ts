import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
<<<<<<< HEAD
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
=======
import { RecipeOverviewComponent } from "./recipe-overview/recipe-overview.component";
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

export interface Irecipies {
  id: string;
  itemTitle: string;
  itemposter: string;
  itemImage: string;
  itemType: string;
  itemDuration: string;
  itemLink: string;
  itemProcedure: string;
  itemIngredients: string;
}
>>>>>>> 9050d5189cd95b9db009218258df737037c69678

export interface IRecipe {
  id: number;
  itemTitle: string;
  itemposter: string;
  itemImage: number;
  itemType: string;
  itemDuration: string;
  itemLink: string;
  itemProcedure: string;
  itemIngredients: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [
    RouterOutlet,
    RecipecardComponent,
    DashboardComponent,
    LandingPageComponent,
    RouterLink,
    RecipeOverviewComponent,
  ],
=======
  imports: [RouterOutlet, RecipecardComponent, DashboardComponent, LandingPageComponent, RouterLink, RecipeOverviewComponent , AddRecipeComponent],
>>>>>>> 9050d5189cd95b9db009218258df737037c69678
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  recipe: Array<Irecipies> = [];
}
