import { Component } from '@angular/core';


@Component({
    selector: 'hiAngular',
    // template :'<h1> This is my components</h1> ',
    templateUrl: '/app/templates/HiAngular.html',
    styleUrls: ['app/Content/MyComponent.css']

})


export class hiAngularComponent {

    myStyle: string = 'yellow';
    dynamicClass: string = 'danger';
    isActive: boolean = false;
    count: number = 1;
    People: any[];
    mySwitch:number=2;
    constructor() {
        this.People = [
            { name: 'ALi', family: 'Alavi', age: 20 },
            { name: 'Reza', family: 'Alavi', age: 43 },
            { name: 'hossein', family: 'hossein', age: 45 },
            { name: 'Hasan', family: 'Alavi', age: 12 },
            { name: 'Mohhamad', family: 'hossein', age: 34 }
        ];
    }
    active() {
        this.isActive = !this.isActive;
    }
};