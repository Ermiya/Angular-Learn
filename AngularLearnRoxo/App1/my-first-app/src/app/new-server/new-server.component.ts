import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class NewServerComponent implements OnInit {

  @Output() iranianServer: EventEmitter<{ nameServer: string, contentServer: string }> = new EventEmitter<{ nameServer: string, contentServer: string }>();
  @Output() germanyServer: EventEmitter<{ nameServer: string, contentServer: string }> = new EventEmitter<{ nameServer: string, contentServer: string }>();;

  @ViewChild('serverContent') serverContent:ElementRef;


  NewServerName = '';
  NewServerContent = '';
  serverElements = [];


  constructor() { }


  onAddIranianServer() {
    this.iranianServer.emit({ nameServer: this.NewServerName,contentServer:this.NewServerContent });
   //this.iranianServer.emit({ nameServer: this.NewServerName,contentServer:this.serverContent.nativeElement.value });
  //  console.log(this.serverContent.nativeElement.value);
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
