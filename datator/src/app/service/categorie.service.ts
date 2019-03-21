import { Injectable } from '@angular/core';
import { Categorie } from '../entity/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

private url = 'api/categorie';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getCategories (): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Motcle')),
        catchError(this.handleError<Categorie[]>('getCategories', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getCategorie(id: number): Observable<Categorie> {
    const url = `${this.url}/${id}`;
    return this.http.get<Categorie>(url).pipe(
      tap(_ => this.log(`fetched Categorie id=${id}`)),
      catchError(this.handleError<Categorie>(`getCategorie id=${id}`))
    );
  }

  /* GET Categorie whose name contains search term */
  searchCategorie(term: string): Observable<Categorie[]> {
    if (!term.trim()) {
      // if not search term, return empty Categorie array.
      return of([]);
    }
    return this.http.get<Categorie[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found Categorie matching "${term}"`)),
      catchError(this.handleError<Categorie[]>('searchCategorie', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Categorie to the server */
  addCategorie (categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.url, categorie, httpOptions).pipe(
      tap((newcategorie: Categorie) => this.log(`added mot-clé w/ id=${newcategorie.id}`)),
      catchError(this.handleError<Categorie>('addcategorie'))
    );
  }

  /** DELETE: delete the categorie from the server */
  deleteCategorie (categorie: Categorie | number): Observable<Categorie> {
    const id = typeof categorie === 'number' ? categorie : categorie.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Categorie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Categorie id=${id}`)),
      catchError(this.handleError<Categorie>('deleteCategorie'))
    );
  }

  /** PUT: update the categorie on the server */
  updateCategorie (categorie: Categorie): Observable<any> {
    return this.http.put(this.url, categorie, httpOptions).pipe(
      tap(_ => this.log(`updated categorie id=${categorie.id}`)),
      catchError(this.handleError<any>('updateCategorie'))
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
