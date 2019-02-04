import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';


@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit(this.recipe);
  }
}
