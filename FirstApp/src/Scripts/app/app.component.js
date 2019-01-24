"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Register_1 = require("./models/Register");
var AppComponent = (function () {
    function AppComponent() {
    }
<<<<<<< HEAD
=======
    AppComponent.prototype.save = function (_register) {
        this.register = new Register_1.Register(_register.value.username, _register.value.password, _register.value.email, _register.value.address);
        //
        console.log(this.register);
    };
>>>>>>> parent of 5faf6a3... End 19 Reactive Form
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/appComponents.html',
<<<<<<< HEAD
<<<<<<< HEAD
=======
        styles: [
            "\n      .ng-valid[required],\n      ng-valid.required {\n        border: 1px solid green;\n      }\n      .ng-invalid:not(form)[class~='ng-touched'] {\n        border: 1px solid red;\n      }\n    ",
        ],
>>>>>>> parent of 5faf6a3... End 19 Reactive Form
=======
        styles: [
            "\n      .ng-valid[required],\n      ng-valid.required {\n        border: 1px solid green;\n      }\n      .ng-invalid:not(form)[class~='ng-touched'] {\n        border: 1px solid red;\n      }\n    ",
        ],
>>>>>>> parent of 5faf6a3... End 19 Reactive Form
    })
], AppComponent);
exports.AppComponent = AppComponent;
this.register = new Register_1.Register(_register.value.username, _register.value.password, _register.value.email, _register.value.address);
console.log(this.register);
//# sourceMappingURL=app.component.js.map