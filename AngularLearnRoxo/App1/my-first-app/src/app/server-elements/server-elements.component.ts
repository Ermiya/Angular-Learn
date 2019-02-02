import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
})
export class ServerElementsComponent implements OnInit, OnChanges, DoCheck , AfterContentInit ,
            AfterContentChecked , AfterViewChecked , AfterViewInit , OnDestroy{



  @Input() element: {type: string; name: string; content: string};
  @Input() name;
  constructor() {
    console.log('constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit Called');
  }
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');

  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }

}
