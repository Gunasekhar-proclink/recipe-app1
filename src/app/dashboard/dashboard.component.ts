import { Component, Input } from '@angular/core';
import { RecipecardComponent } from '../recipecard/recipecard.component';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RecipecardComponent, SearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  allitems: Array<recipe> = [];
  filteredItems: Array<recipe> = [];
  msg = '';

  updateFilteredItems(items: Array<recipe>) {
    this.filteredItems = items;
  }
  constructor(private recipeservice: RecipeDataService) {
    this.allitems = this.recipeservice.recipeData;
  }

  loadRecipes() {
    this.recipeservice
      .getAllRecipesP()
      .then((data) => {
        this.allitems = data;
      })
      .catch(() => {
        this.msg = 'Something went wrong';
      });
  }

  deleteRecipeItem(item: recipe) {
    this.recipeservice.deleteRecipeP(item).then(() => this.loadRecipes());
  }
}
}