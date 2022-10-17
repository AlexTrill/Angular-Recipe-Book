import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RecipeServiceService {
 
  recipeSelected = new EventEmitter<Recipe>();
 
  private recipes: Recipe[] = [
    new Recipe('Delicious curry recipe', 'curry', 'https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg',
    [ new Ingredient('potato', 1) ,
     new Ingredient('curry', 5)]),
  
    new Recipe('Zesty lemon shrimp', ' lemon shrimp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtT_93EBaosgnZBWa_dfONtIb5ezGpcyPBg&usqp=CAU',
     [ new Ingredient('lemon', 2) ,
    new Ingredient('shrimp', 12)])
  ];

  constructor( private slService: ShoppingListServiceService) {}
  
getRecipes(){
  return this.recipes.slice();
}
addIngredientsToShoppingList(ingredients : Ingredient[]){
  this.slService.addIngredients(ingredients)

}
}
