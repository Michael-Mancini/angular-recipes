import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Muffin', 'Magnificient Muffin Recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/11/05/lemon-muffins-ck-x.jpg?itok=hcjfljRJ'),
    new Recipe('Muffin', 'Magnificient Muffin Recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/11/05/lemon-muffins-ck-x.jpg?itok=hcjfljRJ')
  ];

  constructor() { }

  ngOnInit() {
  }

}
