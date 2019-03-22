import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {


 private url = 'https://api.ozae.com/gnw/articles?date=20190317__20190317&edition=fr-fr&key=11116dbf000000000000960d2228e999&hard_limit=50&topic=s';  

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }


getdata (){
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.ozae.com/gnw/ngrams?topic=s&query=FootBall&hours=48&limit=20&key=11116dbf000000000000960d2228e999';
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { // Success
                /*this.results = res.json().results.map(item => {
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.trackViewUrl,
                      item.artworkUrl30,
                      item.artistId
                  );
                });*/
                console.log(res);
                 //this.results = res;
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    console.log(promise);
    return promise;



   /*   let toto = this.http
            .get('https://api.ozae.com/gnw/ngrams?topic=s&query=Tennis&hours=48&limit=20&key=11116dbf000000000000960d2228e999').subscribe(data => {
      console.log(data);
      toto = data;
    });
            console.log(toto);
      return toto;
*/  }

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
