import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpieListComponent } from './recpies/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { RecpieItemComponent } from './recpies/recpie-list/recpie-item/recpie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { RecipeEditComponent } from './recpies/recipe-edit/recipe-edit.component';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeService } from './shared/services/recipe.service';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    RecpiesComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecpieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
