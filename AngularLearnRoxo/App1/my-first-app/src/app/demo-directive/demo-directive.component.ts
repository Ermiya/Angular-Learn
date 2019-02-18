import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  value = 10;
  constructor() { }

  ngOnInit() {
  }

}
