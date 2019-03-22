import { Component, OnInit  } from '@angular/core';
import { TestHttpService } from './service/test-http.service';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3/d3';
import { Motcle } from './entity/motcle';
import { CATEGORIES } from './mock/mock-categorie';
import { Categorie } from './entity/categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  categories = CATEGORIES;
  
  motcle :Motcle[]=[];
  mot : Motcle;

  constructor(private testHttpService: TestHttpService) {
    if(!sessionStorage.getItem("Eco") || !sessionStorage.getItem("FootBall"))
    {
       testHttpService.getdata();
       testHttpService.getecodata();
    }else if(!sessionStorage.getItem("categories"))
    {
      this.setCategorie();
    }
  }

  ngOnInit() {
    //this.getMotcles();
  }

  private setCategorie()
  {
    let foot = JSON.parse(sessionStorage.getItem("FootBall"));
    let i = 0;
    let sommes = 0;
    let indiceConfiance= 0;
    for (let value of foot) {
        sommes+= value.nbArticle;
        indiceConfiance+=value.socialScore;
        i++;
    }
    this.categories[1].nbArticle = sommes;
    this.categories[1].indiceConfiance = indiceConfiance/i;
    let eco =  JSON.parse(sessionStorage.getItem("Eco"));
    i = 0;
    sommes = 0;
    indiceConfiance= 0;
    for (let value of eco) {
        sommes+= value.nbArticle;
        indiceConfiance+=value.socialScore;
        i++;
    }
    this.categories[0].nbArticle = sommes;
    this.categories[0].indiceConfiance = indiceConfiance/i;


    this.categories[1].sousCategories[0].motcles = JSON.parse(sessionStorage.getItem("FootBall"));
    this.categories[0].sousCategories[1].motcles = JSON.parse(sessionStorage.getItem("Eco"));
    sessionStorage.setItem("categories",JSON.stringify( this.categories));
                
  }

}
