import { Routes } from '@angular/router';
import { SearchRecipeComponent } from './pages/search-recipe/search-recipe.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { ViewRecipeComponent } from './pages/view-recipe/view-recipe.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component:HomepageComponent,
    title:'Flavour Genie',
  },
  {
    path: 'search',
    component: SearchRecipeComponent,
    title:'Search Recipe',
  },
  {
    path: 'recipe-list',
    component: RecipeListComponent,
    title:'Recipes List',
  },
  {
    path: 'view-recipe',
    component: ViewRecipeComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
