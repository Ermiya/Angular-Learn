import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Output() recipeLoaded: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  // onSelect(value) {
  //   if (value === 'recipe') {
  //     console.log(value);
  //     this.recipeLoaded.emit('recipe');
  //   } else {
  //     console.log(value);
  //     this.recipeLoaded.emit('shopping-list');
  //   }
  // }
}
