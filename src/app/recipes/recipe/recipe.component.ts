import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeServiceService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe : Recipe;

  constructor(private recipeService : RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
      this.selectedRecipe = recipe;
    }
    );
  }

}
