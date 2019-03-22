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
    
  }

  private setCategorie()
  {
    this.categories[1].sousCategories[0].motcles = JSON.parse(sessionStorage.getItem("FootBall"));
    this.categories[0].sousCategories[1].motcles = JSON.parse(sessionStorage.getItem("Eco"));
     sessionStorage.setItem("categories",JSON.stringify( this.categories));
                
  }

}
