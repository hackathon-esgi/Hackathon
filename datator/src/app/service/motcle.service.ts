import { Injectable } from '@angular/core';
import { Motcle } from '../entity/motcle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MotcleService {

	private url = 'api/categorie';  // URL to web api
  	constructor(
	    private http: HttpClient,
	    private messageService: MessageService) { }

  /** GET heroes from the server */
  getMotcles (): Observable<Motcle[]> {
    return this.http.get<Motcle[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Motcle')),
        catchError(this.handleError<Motcle[]>('getMotcles', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getMotcle(id: number): Observable<Motcle> {
    const url = `${this.url}/${id}`;
    return this.http.get<Motcle>(url).pipe(
      tap(_ => this.log(`fetched Motcle id=${id}`)),
      catchError(this.handleError<Motcle>(`getMotcle id=${id}`))
    );
  }

  /* GET Motcle whose name contains search term */
  searchMotcle(term: string): Observable<Motcle[]> {
    if (!term.trim()) {
      // if not search term, return empty Motcle array.
      return of([]);
    }
    return this.http.get<Motcle[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found Motcle matching "${term}"`)),
      catchError(this.handleError<Motcle[]>('searchMotcle', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new newmotcle to the server */
  addMotcle (motcle: Motcle): Observable<Motcle> {
    return this.http.post<Motcle>(this.url, motcle, httpOptions).pipe(
      tap((newmotcle: Motcle) => this.log(`added mot-clé w/ id=${newmotcle.id}`)),
      catchError(this.handleError<Motcle>('addMotcle'))
    );
  }

  /** DELETE: delete the motcle from the server */
  deleteMotcle (motcle: Motcle | number): Observable<Motcle> {
    const id = typeof motcle === 'number' ? motcle : motcle.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Motcle>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted motcle id=${id}`)),
      catchError(this.handleError<Motcle>('deleteMotcle'))
    );
  }

  /** PUT: update the motcle on the server */
  updateMotcle (motcle: Motcle): Observable<any> {
    return this.http.put(this.url, motcle, httpOptions).pipe(
      tap(_ => this.log(`updated motcle id=${motcle.id}`)),
      catchError(this.handleError<any>('updateMotcle'))
    );
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
