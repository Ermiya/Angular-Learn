import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('1دستور پخت ماكاروني',
                   '1توضيح براي دستور پخت ماكاروني قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
        new Recipe('2دستور پخت ماكاروني',
                   '2توضيح براي دستور پخت ماكاروني قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
        new Recipe('3دستور پخت ماكاروني',
                   '3توضيح براي دستور پخت ماكاروني قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg')
      ];

      //constructor(private shoppingListService: ShoppingListService) {}

      getRecipeDetail(index: number) {
        return this.recipes[index];
      }
      getRecipe() {
          return this.recipes.slice();
      }
      addRecipeToShoppingList(ingredients: Ingredient[]) {
        // this.shoppingListService.adFromRecipeShoppingList(ingredients)
      }
}
