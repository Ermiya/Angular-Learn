import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NewServerComponent } from './new-server/new-server.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, NewServerComponent, 
    ServerElementsComponent, DemoDirectiveComponent, BasicHighlightDirective, 
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
