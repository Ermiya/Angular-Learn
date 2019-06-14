import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('دستور پخت ماكاروني',
                   'توضيح براي دستور پخت ماكاروني قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
        new Recipe(' دستور پخت سوپ',
                   'توضيح براي دستور پخت سوپ قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
        new Recipe('دستور پخت قرمه سبزی ',
                   'توضيح براي دستور پخت قرمه سبزیی قرار ميدهيم',
                   'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg')
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipeDetail(index: number) {
        return this.recipes[index];
      }
      getRecipe() {
          return this.recipes.slice();
      }
      addRecipeToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addFromRecipeShoppingList(ingredients);
      }
}
