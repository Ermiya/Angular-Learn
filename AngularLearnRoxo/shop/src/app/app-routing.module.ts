import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecpiesComponent} from './recpies/recpies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { RecipeEditComponent } from './recpies/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecpiesComponent, children: [
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecpieDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent }
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
