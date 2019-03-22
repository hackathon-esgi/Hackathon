import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-pays',
  templateUrl: './choix-pays.component.html',
  styleUrls: ['./choix-pays.component.css']
})
export class ChoixPaysComponent implements OnInit {

  constructor() { }

 ListPays = [
        { id: 11, name: 'Etats-Unis', color: 'grey' },
        { id: 14, name: 'Belgique', color: 'green' }
    ];

  ListPays2 = [
        { id: 12, name: 'France', color: 'green' },
        { id: 13, name: 'Allemagne', color: 'grey' }
    ];

  ListPays3 = [
        { id: 15, name: 'Italie', color: 'green' },
        { id: 16, name: 'Espagne', color: 'grey' }
    ];
  
  ngOnInit() {
  }

}
