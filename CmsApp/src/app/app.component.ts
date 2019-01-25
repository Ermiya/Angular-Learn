import { Component, OnInit } from '@angular/core';
import { MyService } from './services/service';
import { Group } from './models/Group';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/appComponent.html',
  providers: [MyService]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.api.getAllGroups().subscribe(res => this.groups = res);
  }
  groups: Group[];
  constructor(private api: MyService) {

  }


}
