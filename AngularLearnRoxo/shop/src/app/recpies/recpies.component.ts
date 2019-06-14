import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../shared/services/recipe.service';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers: [RecipeService]
})
export class RecpiesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(event) {
   // console.log(event);
    this.recipe = event;
  }
}
