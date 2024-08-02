import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewRecipe } from '../../recipe';
import { Irecipies } from '../app.component';
import { RecipeDataService } from '../recipe-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  movies: Array<Irecipies> = [];
  recipeForm: FormGroup;

  constructor(
    public recipedataservice: RecipeDataService,
    private router: Router,
    private frb: FormBuilder
  ) {
    // this.movies = this.movieservice.getMovieList();

    this.recipeForm = this.frb.group({
      itemTitle: ['', [Validators.required, Validators.minLength(2)]],
      itemposter: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.pattern(/^https:.*/),
        ],
      ],
      itemImage:  [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.pattern(/^https:.*/),
        ],
      ],
      itemType: ['', [Validators.required]],
      itemDuration: ['', [Validators.required]],
      itemLink:  [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.pattern(/^https:.*/),
        ],
      ],
      itemProcedure: ['', [Validators.required]],
      itemIngredients: ['', [Validators.required]],
    });
  }

  addRecipes() {
    console.log(this.recipeForm.value);

    if (this.recipeForm.valid) {
      let newMovie: NewRecipe = this.recipeForm.value;

      this.recipedataservice.addRecipe(newMovie).then(() => {
        // Move to movies page
        this.router.navigate(['recipes']);
      });
    }
  }

  get itemTitle() {
    return this.recipeForm.get('itemTitle');
  }

  get itemposter() {
    return this.recipeForm.get('itemposter');
  }

  get itemImage() {
    return this.recipeForm.get('itemImage');
  }

  get itemType() {
    return this.recipeForm.get('itemType');
  }

  get itemDuration() {
    return this.recipeForm.get('itemDuration');
  }

  get itemLink() {
    return this.recipeForm.get('itemLink');
  }

  get itemProcedure() {
    return this.recipeForm.get('itemProcedure');
  }

  get itemIngredients() {
    return this.recipeForm.get('itemIngredients');
  }
}
