"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hiAngularComponent = (function () {
    function hiAngularComponent() {
        this.myStyle = 'yellow';
        this.dynamicClass = 'danger';
        this.isActive = false;
        this.count = 1;
        this.mySwitch = 2;
        this.People = [
            { name: 'ALi', family: 'Alavi', age: 20 },
            { name: 'Reza', family: 'Alavi', age: 43 },
            { name: 'hossein', family: 'hossein', age: 45 },
            { name: 'Hasan', family: 'Alavi', age: 12 },
            { name: 'Mohhamad', family: 'hossein', age: 34 }
        ];
    }
    hiAngularComponent.prototype.active = function () {
        this.isActive = !this.isActive;
    };
    return hiAngularComponent;
}());
hiAngularComponent = __decorate([
    core_1.Component({
        selector: 'hiAngular',
        // template :'<h1> This is my components</h1> ',
        templateUrl: '/app/templates/HiAngular.html',
        styleUrls: ['app/Content/MyComponent.css']
    }),
    __metadata("design:paramtypes", [])
], hiAngularComponent);
exports.hiAngularComponent = hiAngularComponent;
;
//# sourceMappingURL=HiAngular.js.map