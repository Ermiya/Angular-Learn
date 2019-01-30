import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {

  @Output() iranianServer: EventEmitter<{ nameServer: string, contentServer: string }> = new EventEmitter<{ nameServer: string, contentServer: string }>();
  @Output() germanyServer: EventEmitter<{ nameServer: string, contentServer: string }> = new EventEmitter<{ nameServer: string, contentServer: string }>();;



  NewServerName = '';
  NewServerContent = '';
  serverElements = [];


  constructor() { }


  onAddIranianServer() {
    this.iranianServer.emit({ nameServer: this.NewServerName,contentServer:this.NewServerContent });
    // this.serverElements.push({
    //   type: 'iran',
    //   name: this.NewServerName,
    //   content: this.NewServerContent
    // })
  }

  onAddGermanyServer() {
    this.germanyServer.emit({ nameServer: this.NewServerName,contentServer:this.NewServerContent });
    // this.serverElements.push({
    //   type: 'germany',
    //   name: this.NewServerName,
    //   content: this.NewServerContent
    // })
  }


  ngOnInit() {
  }

}
