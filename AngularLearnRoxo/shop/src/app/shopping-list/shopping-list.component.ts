import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('بسته ماكاروني','1'),
  new Ingredient('پياز', '21'),
  new Ingredient('سس', '1')
]
  constructor() { }

  ngOnInit() {
  }

}
