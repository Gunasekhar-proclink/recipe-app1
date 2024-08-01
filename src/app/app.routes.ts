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
<<<<<<< HEAD
  {
    path: 'add-recipes',
    component: AddRecipeComponent,
  },
  { path: 'overview/:title', component: RecipeOverviewComponent },
=======
  { path: 'overview/:id', component: RecipeOverviewComponent },
>>>>>>> 41fbc7a881378aed270f8de2479fca251ab51e15
  {
    path: 'overview',
    component: RecipeOverviewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  
];
