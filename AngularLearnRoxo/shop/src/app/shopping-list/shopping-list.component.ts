import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[] ;
ingredientSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    console.log(this.ingredients);
    this.ingredientSubscription = this.shoppingListService.ingredientEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;

      }
    );
  }
  onEditIngredient(index) {
    this.shoppingListService.startedEditIngredientIndex.next(index);
  }
ngOnDestroy() {
  this.ingredientSubscription.unsubscribe();
}
}
