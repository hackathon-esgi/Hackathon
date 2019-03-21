import { Injectable } from '@angular/core';
import { AccueilTag } from '../entity/accueilTag';
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
export class AccueilTagService {

private url = 'api/accueilTags';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getAccueilTags (): Observable<AccueilTag[]> {
    return this.http.get<AccueilTag[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Motcle')),
        catchError(this.handleError<AccueilTag[]>('getAccueilTags', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getAccueilTag(id: number): Observable<AccueilTag> {
    const url = `${this.url}/${id}`;
    return this.http.get<AccueilTag>(url).pipe(
      tap(_ => this.log(`fetched Motcle id=${id}`)),
      catchError(this.handleError<AccueilTag>(`getAccueilTag id=${id}`))
    );
  }

  /* GET accueilTags whose name contains search term */
  searchAccueilTag(term: string): Observable<AccueilTag[]> {
    if (!term.trim()) {
      // if not search term, return empty accueilTag array.
      return of([]);
    }
    return this.http.get<AccueilTag[]>(`${this.url}/?name=${term}`).pipe(
      tap(_ => this.log(`found accueilTag matching "${term}"`)),
      catchError(this.handleError<AccueilTag[]>('searchaccueilTags', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new accueilTag to the server */
  addAccueilTag (accueilTag: AccueilTag): Observable<AccueilTag> {
    return this.http.post<AccueilTag>(this.url, accueilTag, httpOptions).pipe(
      tap((newaccueilTag: AccueilTag) => this.log(`added mot-clé w/ id=${newaccueilTag.id}`)),
      catchError(this.handleError<AccueilTag>('addAccueilTag'))
    );
  }

  /** DELETE: delete the accueilTag from the server */
  deleteAccueilTag (accueilTag: AccueilTag | number): Observable<AccueilTag> {
    const id = typeof accueilTag === 'number' ? accueilTag : accueilTag.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<AccueilTag>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted accueilTag id=${id}`)),
      catchError(this.handleError<AccueilTag>('deleteAccueilTag'))
    );
  }

  /** PUT: update the accueilTag on the server */
  updateAccueilTag (accueilTag: AccueilTag): Observable<any> {
    return this.http.put(this.url, accueilTag, httpOptions).pipe(
      tap(_ => this.log(`updated accueilTag id=${accueilTag.id}`)),
      catchError(this.handleError<any>('updateAccueilTag'))
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
