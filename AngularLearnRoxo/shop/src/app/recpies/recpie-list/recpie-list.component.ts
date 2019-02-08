import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes:Recipe[] ;
    // recipes: Recipe[] = [
  //   new Recipe('1دستور پخت ماكاروني',
  //              '1توضيح براي دستور پخت ماكاروني قرار ميدهيم',
  //              'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
  //   new Recipe('2دستور پخت ماكاروني',
  //              '2توضيح براي دستور پخت ماكاروني قرار ميدهيم',
  //              'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
  //   new Recipe('3دستور پخت ماكاروني',
  //              '3توضيح براي دستور پخت ماكاروني قرار ميدهيم',
  //              'https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg')
  // ];
  constructor( private recipeService:RecipeService) {

  }

  ngOnInit() {
this.recipes= this.recipeService.getRecipe();
  }
  onEntekhabRecipe(event) {
    this.recipeSelected.emit(event);
  }
}
