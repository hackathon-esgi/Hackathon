import { Component, OnInit } from '@angular/core';
import { Motcle } from '../../entity/motcle';
import { MotcleService } from '../../service/motcle.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedMotcle: Motcle;
  motcles: Motcle[];

  constructor(private motcleService: MotcleService) { }

  ngOnInit() {
  this.getMotcles();
  }

  onSelect(motcle: Motcle): void {
    this.selectedMotcle = motcle;
  }

  getMotcles(): void {
    this.motcleService.getMotcles()
        .subscribe(motcles => this.motcles = motcles);
        console.log(this.motcles);
  }

}
