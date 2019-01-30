import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('دستور پخت ماكاروني','توضيح براي دستور پخت ماكاروني قرار ميدهيم','https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
  new Recipe('دستور پخت ماكاروني','توضيح براي دستور پخت ماكاروني قرار ميدهيم','https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
  new Recipe('دستور پخت ماكاروني','توضيح براي دستور پخت ماكاروني قرار ميدهيم','https://cdn.lifesambrosia.com/wp-content/uploads/spaghetti-with-creamy-marinara.jpg'),
]
  constructor() {

   }

  ngOnInit() {
  }

}
