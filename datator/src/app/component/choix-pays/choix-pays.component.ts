import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-pays',
  templateUrl: './choix-pays.component.html',
  styleUrls: ['./choix-pays.component.css']
})
export class ChoixPaysComponent implements OnInit {

  constructor() { }

 ListPays = [
        { id: 11, name: 'France', color: 'greenPays' }
    ];

  ListPays2 = [
        { id: 12, name: 'France', color: 'green' },
        { id: 13, name: 'Allemagne', color: 'grey' }
    ];
  
  ngOnInit() {
  }

}
