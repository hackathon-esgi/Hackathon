import { Component, OnInit } from '@angular/core';
import { Motcle } from '../../entity/motcle';
import { MotcleService } from '../../service/motcle.service';
import { CATEGORIES } from '../../mock/mock-categorie';
import { Categorie } from '../../entity/categorie';
import { SousCategorie } from '../../entity/sousCategories';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(id: number, sousCategorie: SousCategorie): void {
    console.log(sousCategorie)
    console.log(id)
  }

}
