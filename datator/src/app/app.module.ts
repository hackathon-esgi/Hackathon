import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { PaysComponent } from './component/pays/pays.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ChoixCategoriesComponent } from './component/choix-categories/choix-categories.component';
import { MotCleComponent } from './component/mot-cle/mot-cle.component';
import { ResultatRechercheComponent } from './component/resultat-recherche/resultat-recherche.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PaysComponent,
    CategoriesComponent,
    ChoixCategoriesComponent,
    MotCleComponent,
    ResultatRechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
