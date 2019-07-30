import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
ingredientForm: FormGroup;
editMode = false;
indexIngredient: number;
editItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });

    this.shoppingListService.startedEditIngredientIndex.subscribe(
      (index: number) => {

        this.indexIngredient = index;
        this.editMode = true;

        this.editItem = this.shoppingListService.getIngredientIndex(index);
        this.ingredientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })

      }
    )
  }

  addIngredient() {
      const name = this.ingredientForm.get('name').value;
      const amount = this.ingredientForm.get('amount').value;

      this.shoppingListService.addIngredient(name, amount);
  }
}
