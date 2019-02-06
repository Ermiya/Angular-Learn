import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ConsoleService} from '../shared/services/console.service';
import { AccountService } from '../shared/services/account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [ConsoleService],
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{name: string; status: string}>();
  constructor(
    // private consoleService: ConsoleService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    // console.log(accountName);
    // console.log(accountStatus);

    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({name: accountName, status: accountStatus});
    // console.log(
    //   'وضعيت جديد سرور بهوضعيت سرو تغيرر كرده است به : ' + accountStatus
    // );
  }
}
