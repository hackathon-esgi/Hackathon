import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

   bookList = [
        { id: 11, name: 'Macron', color: 'img' },
	 	{ id: 12, name: 'Macrondd', color: 'img'  },
	  	{ id: 13, name: 'Macronvv', color: 'img'  },
	 	{ id: 12, name: 'Macrondd', color: 'blue'  },
	  	{ id: 13, name: 'Macronvv', color: 'blue'  },
	  	{ id: 11, name: 'Macrsdqsdfon', color: 'blue' },
	 	{ id: 12, name: 'Macsqdrondd', color: 'blue'  },
	  	{ id: 13, name: 'Macronvv', color: 'blue'  },
	 	{ id: 12, name: 'Macrondd', color: 'blue'  },
	  	{ id: 13, name: 'Macronvv', color: 'blue'  }
    ];

  ngOnInit() {
  }

}
