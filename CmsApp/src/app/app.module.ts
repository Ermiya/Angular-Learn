import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule,Route} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ContactUsComponent} from './MyComponents/contactus.component';
import {homeComponent} from './MyComponents/home.component';
import {NewsComponent} from './MyComponents/news.component';
import { AboutUsComponent } from './MyComponents/aboutus.component';


const routes:Route = [
  {path:'',component:homeComponent},
  {path:'home',component:homeComponent},
  {path:'News',component:NewsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'AboutUs',component:AboutUsComponent}

]


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    ContactUsComponent,
    homeComponent,
    NewsComponent,
    AboutUsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
