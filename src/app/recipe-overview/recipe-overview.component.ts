import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe , RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-overview',
  standalone: true,
  imports: [],
  templateUrl: './recipe-overview.component.html',
  styleUrl: './recipe-overview.component.scss'
})
export class RecipeOverviewComponent {
  item!: recipe ; 
  msg = ' '  ; 
  constructor(
    private recipeService: RecipeDataService,
    private route: ActivatedRoute // DI
  ) {}

  // After Initialization of the component
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.recipeService
      .getRecipesByIdP(id)
      .then((data) => {
        this.item = data; // Model
      })
      .catch(() => {
        this.msg = 'Something went wrong 🥲';
      });
  }
}
