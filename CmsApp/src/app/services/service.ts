import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/Group';
import 'rxjs/add/operator/map';
import { News } from '../models/news';

@Injectable()

export class MyService {
    BaseUrl: string;
    GetAllGroups: string;
    GetNewsByPageId: string;
    GetNewsById: string;
    GetPageCount: string;
    GetNewsByGroupId: string;

    constructor(private http: Http) {
        this.BaseUrl = "http://localhost:3603/";
        this.GetAllGroups = "GetAllGroups";
        this.GetNewsByPageId = "api/News?pageId=";
        this.GetPageCount = "PageCount";
        this.GetNewsById = "api/News/";
        this.GetNewsByGroupId = "Group/";
    }
    getAllGroups(): Observable<Group[]> {
        return this.http.get(this.BaseUrl + this.GetAllGroups).map(res => res.json());
    }

    getNews(pageNumber: number): Observable<News[]> {
        return this.http.get(this.BaseUrl + this.GetNewsByPageId + pageNumber).map(res => res.json());
    }

    getPageCount() {
        return this.http.get(this.BaseUrl + this.getPageCount).map(res => res.json());
    }

    getNewsById(newsId: number): Observable<News> {
        return this.http.get(this.BaseUrl + this.GetNewsById + newsId).map(res => res.json());
    }

    getNewsByGroupId(groupId: number): Observable<News[]> {
        return this.http.get(this.BaseUrl + this.getNewsByGroupId + groupId).map(res => res.json());
    }
}