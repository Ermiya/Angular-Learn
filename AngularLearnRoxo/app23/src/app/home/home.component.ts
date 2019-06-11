import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable , interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
numberSubscription: Subscription;
observableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = interval(1000);
   this.numberSubscription = myNumber.subscribe(
      (number: Number) =>{
        console.log(number)
      }
    )

    const myObservable = Observable.create(
      (observer: Observer<string>) =>{
        setTimeout(() => {
          observer.next('اولين پيام ارسال شود')
        }, 2000 );
        setTimeout(() => {
          observer.complete()
        }, 4000 );
        setTimeout(() => {
          observer.error('خطا : پيامي ارسال نشد')
        }, 6000 );
      }
    );

   this.observableSubscription = myObservable.subscribe(
      (data: string) => {console.log(data)},
      (error) => {console.log(error) },
      () => {console.log('عمليات با موفقيت انجام شد')}
    );
  }
ngOnDestroy() {
  this.numberSubscription.unsubscribe();
  this.observableSubscription.unsubscribe();
}
}
