import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('stable')
    },2000)
  })
  
  filterstring =''
  servers = [
    {
      instanceType: 'medium',
      name: 'سرور آکادمی آنلاین روکسو',
      status: 'آنلاین',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'پایگاه داده',
      status: 'آنلاین',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'سرور مقالات آموزشی روکسو',
      status: 'آفلاین',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'سرور مرکزی همدان روکسو',
      status: 'آنلاین',
      started: new Date(15, 1, 2017)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'آنلاین',
      'list-group-item-warning': server.status === 'آفلاین',
      'list-group-item-danger': server.status === 'مسدود'
    };
  }
  addServer(){
    this.servers.push(
      {
        instanceType: 'small',
        name: 'سرور افزوده شده',
        status: 'آنلاین',
        started: new Date(15, 1, 2017)
      }
    )
  }
}
