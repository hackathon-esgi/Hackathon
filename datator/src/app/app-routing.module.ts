import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PriceComponent } from './component/price/price.component';
import { ChoixCategorieComponent} from './component/choix-categorie/choix-categorie.component';
import {ChoixPaysComponent} from './component/choix-pays/choix-pays.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price', component: PriceComponent },
  { path: 'choix', component: ChoixCategorieComponent },
  { path: 'choixpays', component: ChoixPaysComponent }

  ];


@NgModule({
  imports: [ RouterModule.forRoot(routes),
  			 NgDatepickerModule ],
  exports: [ RouterModule,
  			NgDatepickerModule ]
})

export class AppRoutingModule {}
