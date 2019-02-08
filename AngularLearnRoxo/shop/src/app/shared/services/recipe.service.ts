import { Recipe } from '../models/recipe.model';

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

      getRecipe(){
          return this.recipes.slice();
      }
}