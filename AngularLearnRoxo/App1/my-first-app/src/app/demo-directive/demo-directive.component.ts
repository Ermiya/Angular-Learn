import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  onlyOdd: boolean = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  constructor() { }

  ngOnInit() {
  }

}
