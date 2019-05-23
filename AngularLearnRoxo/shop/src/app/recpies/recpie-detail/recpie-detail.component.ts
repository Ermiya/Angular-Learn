import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recpieService: RecipeService ,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recpieService.getRecipeDetail(this.id);
      }
    )
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo : this.route})
  }
  addToShoppingList(){
    //this.recpieService.addRecipeToShoppingList(this.recipe.ingredients)
  }

}
