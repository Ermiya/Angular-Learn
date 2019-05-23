import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';


@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() selectedRecipe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}
