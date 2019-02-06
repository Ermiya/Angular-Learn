import {ConsoleService} from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'administrator',
      status: 'فعال',
    },
    {
      name: 'User',
      status: 'غير فعال',
    },
    {
      name: 'Guest',
      status: 'نامشخص',
    },
  ];

  constructor(private consoleService: ConsoleService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.consoleService.logChangeStatus(status);
  }
  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.consoleService.logChangeStatus(status);
  }
}
