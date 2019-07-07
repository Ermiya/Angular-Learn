import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
    ingredientEvent = new Subject<Ingredient[]>();
    startedEditIngredientIndex = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('بسته ماکارونی' , 1),
        new Ingredient('پیاز' , 2),
        new Ingredient('سس', 1)
    ];

    getIngredien() {
        return this.ingredients.slice();
    }

    getIngredient(index)
    {
      return this.ingredients[index];
    }
    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientEvent.next(this.ingredients.slice());
    }

    addFromRecipeShoppingList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientEvent.next(this.ingredients.slice());
    }
}
