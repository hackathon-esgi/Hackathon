import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './component/categories/categories.component';
import { ChoixCategoriesComponent } from './component/choix-categories/choix-categories.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'choix', component: ChoixCategoriesComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
