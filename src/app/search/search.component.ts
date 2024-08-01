import { Component, EventEmitter, Output } from '@angular/core';
import { recipe, RecipeDataService } from '../recipe-data.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  
  allItems!: Array<recipe>;
  filteredItems: Array<recipe> = [];
  searchText: string = ' ';

  @Output() filteredItemsChange = new EventEmitter<Array<recipe>>();

  constructor(private recipeService: RecipeDataService) {
     // this.allItems = this.recipeService.recipeData;
  }
  ngOnInit() {
    this.loadRecipies();
  }
  loadRecipies() {
    this.recipeService.getAllRecipesP().then((data) => (this.allItems = data));
  }

  search() {
    this.filteredItems = this.allItems.filter(
      (item) =>
        item.itemTitle
          .toLowerCase()
          .includes(this.searchText.toLocaleLowerCase())
    );
    console.log(this.filteredItems);
    this.filteredItemsChange.emit(this.filteredItems);
  }
}
