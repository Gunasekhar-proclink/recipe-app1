import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipecardComponent, DashboardComponent, LandingPageComponent, RouterLink, RecipeOverviewComponent , AddRecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  recipe: Array<Irecipies> = [];
}
