import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'iran', name: 'سرور مرکزی', content: 'این سرور برای تست است' }];

  onLocalServer(localData) {
    this.serverElements.push({
      type: 'iran',
      name: localData.nameServer,
      content: localData.contentServer
    });
  }
  onExternalServer(externalData) {
    this.serverElements.push({
      type: 'germany',
      name: externalData.nameServer,
      content: externalData.contentServer
    });
  }

  title = 'فرشيد';
  name = '';
}
