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
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(builder) {
        this.builder = builder;
        this.username = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(5)
        ]);
        this.password = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.email = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.address = new forms_1.FormControl('');
        this.registerForm = this.builder.group({
            username: this.username,
            password: this.password,
            email: this.email,
            address: this.address
        });
    }
    AppComponent.prototype.save = function () {
        console.log(this.registerForm.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/appCoponent.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map