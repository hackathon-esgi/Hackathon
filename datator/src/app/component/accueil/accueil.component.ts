import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

   List = [
        { id: 11, name: 'Manifestations Paris', color: 'greyBold' },
	 	{ id: 12, name: 'Jeux Olympiques', color: 'greyBold'  },
	  	{ id: 13, name: 'Belgique', color: 'grey'  },
	 	{ id: 12, name: 'Etats-Unis', color: 'grey'  },
	  	{ id: 13, name: 'Adoptions chiens', color: 'greyBold'  },
	  	{ id: 11, name: 'Recherche par mot clés', color: 'rose' },
	 	{ id: 12, name: 'Italie', color: 'grey'  },
	  	{ id: 13, name: 'Belgique', color: 'grey'  },
	 	{ id: 12, name: 'Gilets jaunes', color: 'greyBold'  },
	 	{ id: 12, name: 'Design', color: 'greyBold'  },
	  	{ id: 13, name: 'Recherche par pays', color: 'green'  },
	  	{ id: 12, name: 'Trump', color: 'grey'  }
    ];

  ngOnInit() {
  }

}
