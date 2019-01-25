import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ContactUsComponent } from './MyComponents/contactus.component';
import { homeComponent } from './MyComponents/home.component';
import { NewsComponent } from './MyComponents/news.component';
import { AboutUsComponent } from './MyComponents/aboutus.component';


const routes: any = [
  { path: '', component: homeComponent },
  { path: 'home', component: homeComponent },
  { path: 'News', component: NewsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'AboutUs', component: AboutUsComponent }

]


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes),HttpModule],
  declarations: [
    AppComponent,
    ContactUsComponent,
    homeComponent,
    NewsComponent,
    AboutUsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
