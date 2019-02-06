import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
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
  constructor() {

  }

  ngOnInit() {
  }
  onEntekhabRecipe(event) {
    this.recipeSelected.emit(event);
  }
}
