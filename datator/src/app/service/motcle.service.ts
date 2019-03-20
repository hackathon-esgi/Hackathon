import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motcle } from '../entity/motcle';
import { MOTCLES } from '../mock/mock-motcles';


@Injectable({
  providedIn: 'root'
})
export class MotcleService {

  constructor() { }
  getMotcles(): Observable<Motcle[]> {
    return of(MOTCLES);
  }
}
