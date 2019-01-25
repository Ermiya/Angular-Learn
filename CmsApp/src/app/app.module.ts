import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { ContactUsComponent } from './MyComponents/contactus.component';
import { HomeComponent } from './MyComponents/home.component';
import { NewsComponent } from './MyComponents/news.component';
import { AboutUsComponent } from './MyComponents/aboutus.component';
import { GroupsComponent } from './MyComponents/group.component';
import { SingleNewsComponent } from './MyComponents/singlenews.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'News/Page/:id', component: NewsComponent },
  { path: 'Group/:id', component: GroupsComponent },
  { path: 'News/:id', component: SingleNewsComponent },
];


@NgModule({
  imports:      [ BrowserModule , ReactiveFormsModule ,RouterModule.forRoot(routes) , HttpModule],
  declarations: [ AppComponent , ContactUsComponent , HomeComponent , AboutUsComponent , NewsComponent , SingleNewsComponent , GroupsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
