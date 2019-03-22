import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Motcle } from '../entity/motcle';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {


 private url = 'https://api.ozae.com/gnw/articles?date=20190317__20190317&edition=fr-fr&key=11116dbf000000000000960d2228e999&hard_limit=50&topic=s';  

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
motcle :Motcle[]=[];
mot :Motcle;

getdata (){
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.ozae.com/gnw/ngrams?topic=s&query=FootBall&hours=48&limit=20&key=11116dbf000000000000960d2228e999';
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { 
                let i = 0;
                for (let value of res["ngrams"]) {
                  i++;
                  this.mot ={
                        id: i,
                          name: value.ngram,
                          score: value.sum_confidence,
                          nbArticle: value.count_articles,
                          socialScore: value.social_score_sum
                      };
                  this.motcle.push(this.mot);
                }
                 sessionStorage.setItem("FootBall",JSON.stringify( this.motcle));
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    return promise;
  }



  getecodata (){
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.ozae.com/gnw/ngrams?topic=b&query=Emplois&hours=48&limit=20&key=11116dbf000000000000960d2228e999';
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { 
                let i = 0;
                let sommes = 0;
                let indiceConfiance= 0;
                for (let value of res["ngrams"]) {
                  i++;
                  this.mot ={
                        id: i,
                          name: value.ngram,
                          score: value.sum_confidence,
                          nbArticle: value.count_articles,
                          socialScore: value.social_score_sum
                      };
                  this.motcle.push(this.mot);
                }
                 sessionStorage.setItem("Eco",JSON.stringify( this.motcle));
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    return promise;
  }



   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}