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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var MyService = (function () {
    function MyService(http) {
        this.http = http;
        this.BaseUrl = "http://localhost:3603/";
        this.GetAllGroups = "GetAllGroups";
        this.GetNewsByPageId = "api/News?pageId=";
        this.GetPageCount = "PageCount";
        this.GetNewsById = "api/News/";
        this.GetNewsByGroupId = "Group/";
        this.GetComment = "Comments/";
    }
    MyService.prototype.getAllGroups = function () {
        return this.http.get(this.BaseUrl + this.GetAllGroups).map(function (res) { return res.json(); });
    };
    MyService.prototype.getNews = function (pageNumber) {
        return this.http.get(this.BaseUrl + this.GetNewsByPageId + pageNumber).map(function (res) { return res.json(); });
    };
    MyService.prototype.getPageCount = function () {
        return this.http.get(this.BaseUrl + this.GetPageCount).map(function (res) { return res.json(); });
    };
    MyService.prototype.getNewsById = function (newsId) {
        return this.http.get(this.BaseUrl + this.GetNewsById + newsId).map(function (res) { return res.json(); });
    };
    MyService.prototype.getNewsByGroupId = function (groupId) {
        return this.http.get(this.BaseUrl + this.GetNewsByGroupId + groupId).map(function (res) { return res.json(); });
    };
    MyService.prototype.getAllCommments = function (newsId) {
        return this.http.get(this.BaseUrl + this.GetComment + newsId).map(function (res) { return res.json(); });
    };
    MyService.prototype.postComment = function (comment) {
        return this.http.post(this.BaseUrl + '/Api/News/', comment).map(function (res) { return res; });
    };
    return MyService;
}());
MyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=service.js.map