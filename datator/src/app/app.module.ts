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
    ChoixCategorieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
