import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: '/app/templates/Counter.html'
})
export class CounterComponent{
@Input() number: number;
@Output() numberChange = new EventEmitter();
increment()
{
this.number++;
this.numberChange.emit(this.number);
}


}
