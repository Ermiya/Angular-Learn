import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {AccountComponent} from './account/account.component';
import {AccountService} from './shared/services/account.service';
import {ConsoleService} from './shared/services/console.service';

@NgModule({
  declarations: [AppComponent, NewAccountComponent, AccountComponent],
  imports: [BrowserModule],
  providers: [AccountService, ConsoleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
