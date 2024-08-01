import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-overview',
  standalone: true,
  imports: [],
  templateUrl: './recipe-overview.component.html',
  styleUrl: './recipe-overview.component.scss'
})
export class RecipeOverviewComponent {
  item: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeDataService
  ) {
    this.route.params.subscribe((params) => {
      const title = params['title'];
      this.item = this.recipeService
        .getAllRecipesP()
        .then((data) =>  data)
        
    });
  }
}
