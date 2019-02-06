import {Component, OnInit} from '@angular/core';
import {AccountService} from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService],
})
export class AppComponent implements OnInit {
  accounts: [{name: string; status: string}] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  // onAccountAdded(newAccount: {name: string; status: string}) {
  //   this.accounts.push(newAccount);
  // }
  // onStatusChanged(updatedInfo: {id: number; newStatus: string}) {
  //   this.accounts[updatedInfo.id].status = updatedInfo.newStatus;
  // }
}
