import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'recipes',
    component: DashboardComponent,
  },
  {
    path: 'add-recipes',
    component: AddRecipeComponent,
  },
  
  { path: 'overview/:id', component: RecipeOverviewComponent },
  {
    path: 'overview',
    component: RecipeOverviewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  
];
