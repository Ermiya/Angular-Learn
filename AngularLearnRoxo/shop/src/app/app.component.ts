import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  recipeShow: boolean;
  constructor() {}
  onNavigation(event) {
    if (event.value === 'recipe') {
      this.recipeShow = true;
    } else {
      this.recipeShow = false;
    }
  }
}
