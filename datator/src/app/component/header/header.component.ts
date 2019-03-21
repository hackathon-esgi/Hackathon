import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    Menu= [
	  	{ url:'/' , name :'Accueil' },
	 	{ url:'/about' , name :'Qui sommes nous ?' },
	  	{ url:'/price' , name :'Prix' },
	 	{ url:'/contact' , name :'Contact' },
	 	{ url: '/categories', name:'categorie'}
	  ];

  constructor() { }

  ngOnInit() {
  }

}
