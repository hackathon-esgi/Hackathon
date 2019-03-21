import { Injectable } from '@angular/core';
import { SousCategorie } from '../entity/sousCategories';
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

export class SousCategoriesService {

  
private url = 'api/categorie';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET sousCategorie from the server */
  getSousCategories (): Observable<SousCategorie[]> {
    return this.http.get<SousCategorie[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Motcle')),
        catchError(this.handleError<SousCategorie[]>('getSousCategories', []))
      );
  }

  /** GET sousCategorie by id. Will 404 if id not found */
  getSousCategorie(id: number): Observable<SousCategorie> {
    const url = `${this.url}/${id}`;
    return this.http.get<SousCategorie>(url).pipe(
      tap(_ => this.log(`fetched SousCategorie id=${id}`)),
      catchError(this.handleError<SousCategorie>(`getSousCategorie id=${id}`))
    );
  }

  /* GET SousCategorie whose name contains search term */
  searchSousCategorie(term: string): Observable<SousCategorie[]> {
    if (!term.trim()) {
      // if not search term, return empty SousCategorie array.
      return of([]);
    }
    return this.http.get<SousCategorie[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found SousCategorie matching "${term}"`)),
      catchError(this.handleError<SousCategorie[]>('searchSousCategorie', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new SousCategorie to the server */
  addSousCategorie (sousCategorie: SousCategorie): Observable<SousCategorie> {
    return this.http.post<SousCategorie>(this.url, sousCategorie, httpOptions).pipe(
      tap((newsousCategorie: SousCategorie) => this.log(`added mot-clé w/ id=${newsousCategorie.id}`)),
      catchError(this.handleError<SousCategorie>('addsousCategoriee'))
    );
  }

  /** DELETE: delete the sousCategorie from the server */
  deleteSousCategorie (sousCategorie: SousCategorie | number): Observable<SousCategorie> {
    const id = typeof sousCategorie === 'number' ? sousCategorie : sousCategorie.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<SousCategorie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Categorie id=${id}`)),
      catchError(this.handleError<SousCategorie>('deleteCategorie'))
    );
  }

  /** PUT: update the sousCategorie on the server */
  updateSousCategorie (sousCategorie: SousCategorie): Observable<any> {
    return this.http.put(this.url, sousCategorie, httpOptions).pipe(
      tap(_ => this.log(`updated sousCategorie id=${sousCategorie.id}`)),
      catchError(this.handleError<any>('updateSousCategorie'))
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
