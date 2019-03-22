import { Component, OnInit } from '@angular/core';
import { Motcle } from '../../entity/motcle';
import { MotcleService } from '../../service/motcle.service';
import { CATEGORIES } from '../../mock/mock-categorie';
import { Categorie } from '../../entity/categorie';
import { SousCategorie } from '../../entity/sousCategories';
import APP_CONFIG from '../../app.config';
import { Node, Link } from '../../d3/d3';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  selectedCat : SousCategorie;
  All = true;
  listMotCle : Motcle[];
  constructor() {
    
  }

  ngOnInit() {
  }

  onSelect(sousCategorie: SousCategorie[]): void {
    this.selectedCat = sousCategorie;
    this.All = null;
    this.listMotCle= null;
  }

  onTarget(listMotCle: Motcle[])
  {
    console.log(listMotCle);
    this.selectedCat = null;
    this.All = null;
    this.listMotCle = listMotCle;
  }

  ALLdata()
  {
    this.selectedCat = null;
    this.All = true;
    this.listMotCle= null;
  }

}
