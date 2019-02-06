import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AccountService} from '../shared/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [ConsoleService],
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string; status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number;newStatus: string;}>();
  constructor(
    // private consoleService: ConsoleService,
    private accountService: AccountService
  ) {}

  ngOnInit() {}
  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // console.log(status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // let consoleService = new ConsoleService();
    // consoleService.logChangeStatus(status);
    // this.consoleService.logChangeStatus(status);
  }
}
