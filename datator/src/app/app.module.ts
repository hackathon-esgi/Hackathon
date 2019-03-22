import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './component/about/about.component';
import { PriceComponent } from './component/price/price.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule }    from '@angular/common/http';
import { ChoixCategorieComponent } from './component/choix-categorie/choix-categorie.component';
import { D3Service, D3_DIRECTIVES } from './d3/d3';

import { GraphComponent } from './d3/visuals/graph/graph.component';
import { SHARED_VISUALS } from './d3/visuals/shared';
import { ChoixPaysComponent } from './component/choix-pays/choix-pays.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CategoriesComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ChoixCategorieComponent,
    GraphComponent,
    SHARED_VISUALS,
    D3_DIRECTIVES,
    ChoixPaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
