"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var contactus_component_1 = require("./MyComponents/contactus.component");
var home_component_1 = require("./MyComponents/home.component");
var news_component_1 = require("./MyComponents/news.component");
var aboutus_component_1 = require("./MyComponents/aboutus.component");
var routes = [
    { path: '', component: home_component_1.homeComponent },
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'News', component: news_component_1.NewsComponent },
    { path: 'ContactUs', component: contactus_component_1.ContactUsComponent },
    { path: 'AboutUs', component: aboutus_component_1.AboutUsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            contactus_component_1.ContactUsComponent,
            home_component_1.homeComponent,
            news_component_1.NewsComponent,
            aboutus_component_1.AboutUsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map