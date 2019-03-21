import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-categorie',
  templateUrl: './choix-categorie.component.html',
  styleUrls: ['./choix-categorie.component.css']
})
export class ChoixCategorieComponent implements OnInit {

  constructor() { }

   listCategorie = [
        { id: 11, name: 'Divertissement', color: 'Divertissement', url:'/assets/image/Divertissement.png' },
	 	{ id: 12, name: 'Economie', color: 'Economie', url:'/assets/image/Economie.png'  },
	  	{ id: 13, name: 'Santé', color: 'Sante', url:'/assets/image/Santé.png'  },
	 	{ id: 14, name: 'Sciences et technologies', color: 'ScieetTech', url:'/assets/image/Sciences.png'   },
	  	{ id: 15, name: 'Sport', color: 'Sport', url:'/assets/image/Sport.png'   }
    ];
  ngOnInit() {
  }

}
