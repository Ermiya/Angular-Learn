import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',

    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    title = 'فرشيد';
    name = '';

    id: number = 10;
    status: string = 'فعال';
    allowButton: boolean = false;
    serverCreatedText: string = "هنوز سروری ایجاد نشده است";
    serverName: string;
    serverCreatedStatus: boolean = false;
    serverList:string[];
    constructor() {
        setTimeout(() => {
            this.allowButton = true;
        }, 3000);
    }
    getStatus(): string {
        return this.status;
    }
    ServerCreated() {
        this.serverList.push(this.serverName);
        this.serverCreatedText = "سرور" + this.serverName + "با موفقیت ایجاد شد!";
        this.serverCreatedStatus=true;
    }
    ServerTextRefresh() {
        this.serverCreatedText = " سروری ریفرش شد";
    }

    onUpdateServerName(evevnt: any[]) {
        this.serverName = event.target.value;
    }


}
